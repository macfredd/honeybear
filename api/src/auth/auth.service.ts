import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from '../accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private accountService: AccountsService,
    private jwtService: JwtService

  ) {}

  async validateAccount(username: string, pass: string) {
    const existingAccount = await this.accountService.singIn(username, pass);

    if (!existingAccount) {
      throw new UnauthorizedException();
    }

    const {password, ...result} = existingAccount;
    return result;
  }

  async login (user: any) {
    const payload = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
