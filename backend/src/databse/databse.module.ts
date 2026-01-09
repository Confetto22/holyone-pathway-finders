import { Module } from '@nestjs/common';
import { DatabaseService } from './databse.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService, DatabaseModule],
})
export class DatabaseModule {}
