import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseService } from '@/databse/databse.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, DatabaseService],
})
export class OrdersModule {}
