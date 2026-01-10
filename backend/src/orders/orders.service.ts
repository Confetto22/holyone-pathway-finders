import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DatabaseService } from '@/databse/databse.service';
import { OrderStatus } from 'generated/prisma/enums';

@Injectable()
export class OrdersService {
  constructor(private readonly db: DatabaseService) {}
  async createOrder(orderDetails: CreateOrderDto) {
    const orderNumber = await this.generateOrderNum();
    const { customerInfo, serviceId, serviceDetails } = orderDetails;

    // Fetch service for snapshot and validation
    const service = await this.db.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      throw new NotFoundException(`Service with ID ${serviceId} not found`);
    }

    const findUser = await this.db.user.findUnique({
      where: {
        email: customerInfo?.email,
        name: customerInfo?.fullName,
        phone: customerInfo?.phone,
      },
    });
    if (!findUser) {
      throw new NotFoundException(`User not found`);
    }

    const newOrder = await this.db.order.create({
      data: {
        orderNumber,
        ...orderDetails,
        serviceSnapshot: service, // Store the service details as snapshot
        status: OrderStatus.PENDING,
      },
    });

    const linkOrdertoUser = await this.db.order.update({
      where: { id: newOrder?.id },
      data: {
        user: {
          connect: {
            id: findUser?.id,
          },
        },
        service: {
          connect: {
            id: serviceId,
          },
        },
      },
    });

    return {
      message: 'order successfully created!',
      linkOrdertoUser,
    };
  }

  // findAll() {
  //   return `This action returns all orders`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }

  private async generateOrderNum(): Promise<string> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const length = 9;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    const orderNumber = `ORD-${result}`;

    // Check for uniqueness
    const existingOrder = await this.db.order.findUnique({
      where: { orderNumber },
    });

    if (existingOrder) {
      return this.generateOrderNum();
    }

    return orderNumber;
  }
}
