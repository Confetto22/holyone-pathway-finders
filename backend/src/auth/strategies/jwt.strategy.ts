import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'cNXzwUBvMzzLdMwjcJ8JS3FTa4ZNXR4As83Tj0+e+ws=',
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
