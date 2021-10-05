/* eslint-disable prettier/prettier */
import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './shared/auth.service';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';

@Controller('auth/login')
export class AuthController {

  constructor(
    private authService: AuthService,
  ){}

  @UseGuards(LocalAuthGuard)
  @Post()
  login(@Request() req: any){
    return this.authService.logar(req.user);
  }

}
