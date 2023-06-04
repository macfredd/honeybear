import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dtos/create-account.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private repo: Repository<Account>) {}

  async signUp(createAccountDto: CreateAccountDto) {
    const existingAccount = await this.repo.findOneBy({
      email: createAccountDto.email,
    });
    if (existingAccount) throw new BadRequestException('Email already exists!');

    // Generate the Salt
    const salt = randomBytes(8).toString('hex');

    // Hash the salt and the password together
    const hash = (await scrypt(createAccountDto.password, salt, 32)) as Buffer;

    // join the salt and the hashed results together
    createAccountDto.password = salt + '.' + hash.toString('hex');

    const account = this.repo.create(createAccountDto);
    return this.repo.save(account);
  }

  async singIn(email: string, password: string) {
    const existingAccount = await this.repo.findOneBy({ email });
    if (!existingAccount)
      throw new BadRequestException("User doesn't not exists!");

    const [salt, storedHash] = existingAccount.password.split('.');

    // RE-hash
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Is a valid password
    if (storedHash !== hash.toString('hex')) {
      throw new UnauthorizedException('Wrong Password');
    }
    return existingAccount;
  }
}
