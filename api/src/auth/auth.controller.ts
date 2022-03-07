import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccountDto } from '../accounts/dtos/create-account.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './decorator/auth.decorator';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post()
  sigIn(@Body() body: CreateAccountDto) {
    const account = this.authService.validateAccount(body.email, body.password);
    return account;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @Public()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
