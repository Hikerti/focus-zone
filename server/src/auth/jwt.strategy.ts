import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './interface/interface';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      secretOrKey: config.getOrThrow<boolean>("SESSION_SECURE"),
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.sub, username: payload.username }; 
  }
}