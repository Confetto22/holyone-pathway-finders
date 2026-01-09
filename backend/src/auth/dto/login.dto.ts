import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'generated/prisma/enums';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  // @IsOptional()
  // id?: string;

  // @IsOptional()
  // @IsEnum(UserRole)
  // role?: string;
}
