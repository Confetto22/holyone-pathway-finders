import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  NotFoundException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { DatabaseService } from '@/databse/databse.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import type { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly db: DatabaseService,
  ) {}

  @Post('register')
  async register(@Body() registerData: RegisterDto) {
    return this.authService.register(registerData);
  }

  // @Post('login')
  // async login(@Body() loginData: LoginDto) {
  //   const user = await this.authService.validateUSer(
  //     loginData?.email,
  //     loginData?.password,
  //   );
  //   if (user instanceof UnauthorizedException) {
  //     throw user;
  //   }

  //   // At this point, user is guaranteed to be the correct type
  //   return this.authService.login({
  //     id: user?.id,
  //     email: user?.email,
  //     role: user?.role,
  //   });
  // }

  // @Post('refresh')
  // async refreshToken(@Body('refreshToken') refreshToken: string) {
  //   const payload = this.authService.verifyToken(refreshToken);
  //   if (payload instanceof UnauthorizedException) {
  //     throw payload;
  //   }
  //   const user = await this.authService.findUserById(payload.sub);
  //   if (user instanceof UnauthorizedException) {
  //     throw user;
  //   }

  //   if (!user) {
  //     throw new UnauthorizedException('user not found');
  //   }

  //   return this.authService.login({
  //     id: user?.id,
  //     email: user?.email,
  //     role: user?.role,
  //   });
  // }

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Req() req: any) {
    return this.authService.login(req.user);
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {}
}
