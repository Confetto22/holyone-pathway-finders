import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { DatabaseService } from '@/databse/databse.service';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService, DatabaseService],
})
export class ServicesModule {}
