import { jwtConstants } from './shared/constants';
/* eslint-disable prettier/prettier */
import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './shared/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s'},
    }),
    PassportModule,],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})

export class AuthModule {}
