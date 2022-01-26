import { Body, Controller, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dtos/create-account.dto';

@Controller('accounts')
export class AccountsController {

  constructor(private accountService: AccountsService) {}

  @Post()
  createAccount(@Body() body: CreateAccountDto) {
    const account = this.accountService.create(body);
    return account;
  }
}
