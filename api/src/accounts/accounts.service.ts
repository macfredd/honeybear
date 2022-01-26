import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dtos/create-account.dto';


@Injectable()
export class AccountsService {

  constructor(@InjectRepository(Account) private repo:Repository<Account>) {}

  create(createAccountDto: CreateAccountDto) {
    const account = this.repo.create(createAccountDto);
    return this.repo.save(account);
  }
}
