import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { DatabaseService } from '@/databse/databse.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerData: RegisterDto) {
    const { email, password, name } = registerData;

    // check user existence
    const existingUser = await this.db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      throw new ConflictException('User already exists!');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.db.user.create({
      data: {
        ...registerData,
        password: hashedPassword,
      },
    });
    return {
      message: `welcome onboard ${user?.name.toLocaleLowerCase()}!`,
    };
  }

  async login(user: { id: string; email: string; role: string }) {
    const payload = { sub: user?.id, email: user?.email, role: user?.role };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1h',
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async validateUser({ email, password }: LoginDto) {
    const user = await this.db.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user?.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const { password: _, ...result } = user;
    return result;
  }

  // async validateUSer(email: string, password: string) {
  //   const user = await this.db.user.findUnique({
  //     where: { email },
  //   });
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid email or password');
  //   }
  //   const isPasswordValid = await bcrypt.compare(password, user?.password);
  //   if (!isPasswordValid) {
  //     throw new UnauthorizedException('Invalid email or password');
  //   }
  //   const { password: _, ...result } = user;
  //   return result;
  // }

  // verifyToken(token: string) {
  //   try {
  //     return this.jwtService.verify(token);
  //   } catch (error) {
  //     throw new UnauthorizedException('Invalid token');
  //   }
  // }

  // async findUserById(id: string) {
  //   return await this.db.user.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // hash password
}
