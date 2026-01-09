import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ServiceType } from 'generated/prisma/enums';

export class CreateServiceDto {
  @IsEnum(ServiceType)
  type: ServiceType;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  oldPrice?: number;

  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsOptional()
  specs?: object;

  @IsArray()
  @IsNotEmpty()
  features: string[];

  @IsOptional()
  @IsString()
  region?: string;

  @IsBoolean()
  isActive: boolean;
}
