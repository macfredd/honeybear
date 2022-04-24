import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDto } from './dtos/create-address.dto';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private repo: Repository<Address>) {}

  create(addressDto: CreateAddressDto) {
    const address = this.repo.create(addressDto);
    return this.repo.save(address);
  }

  getAddressById(id: number) {
    return this.repo.findOne(id);
  }
}
