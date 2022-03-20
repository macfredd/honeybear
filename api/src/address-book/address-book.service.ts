import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressBook } from './address-book.entity';
import { Repository } from 'typeorm';
import { CreateAddressBookDto } from './dtos/create-address-book.dto';

@Injectable()
export class AddressBookService {
  constructor(
    @InjectRepository(AddressBook) private repo: Repository<AddressBook>,
  ) {}

  create(createAddressBookDto: CreateAddressBookDto) {
    const addressBook = this.repo.create(createAddressBookDto);
    return this.repo.save(addressBook);
  }
}
