import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { DatabaseService } from '@/databse/databse.service';
import { SearchServiceDto } from './dto/search-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly db: DatabaseService) {}

  async addService(serviceData: CreateServiceDto) {
    // check existence of service
    const foundService = await this.db.service.findFirst({
      where: {
        title: serviceData.title?.trim(),
      },
    });
    if (foundService) {
      throw new ConflictException('Service already exists!');
    }

    const newService = await this.db.service.create({
      data: {
        ...serviceData,
      },
    });

    return {
      message: 'service successfully added!',
      newService,
    };
  }

  async allServices(query: SearchServiceDto) {
    if (Object.keys(query).length > 0) {
      const searchWhere: any = { ...query };
      if (query.title) {
        searchWhere.title = { contains: query.title, mode: 'insensitive' };
      }

      const filtered = await this.db.service.findMany({
        where: searchWhere,
      });
      return {
        message: 'services retrieved successfully!',
        filtered,
      };
    }
    const services = await this.db.service.findMany();
    return {
      message: 'services retrieved successfully!',
      services,
    };
  }

  async findOne(id: string) {
    const service = await this.db.service.findUnique({
      where: {
        id,
      },
    });
    if (!service) {
      throw new NotFoundException('Service not found!');
    }
    return {
      message: 'service retrieved successfully!',
      service,
    };
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    const updatedService = await this.db.service.update({
      where: {
        id,
      },
      data: {
        ...updateServiceDto,
      },
    });

    if (!updatedService) {
      throw new NotFoundException('Service does not exist');
    }

    return {
      message: 'service updated successfully!',
      updatedService,
    };
  }

  async remove(id: string) {
    const deletedService = await this.db.service.delete({
      where: {
        id,
      },
    });
    return {
      message: `${deletedService?.title} successfully deleted!`,
    };
  }
}
