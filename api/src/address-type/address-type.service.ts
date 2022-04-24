import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressType } from './address-type.entity';
import { Repository } from 'typeorm';
import { CreateAddressTypeDto } from './dtos/create-address-type.dto';

@Injectable()
export class AddressTypeService {
  constructor(
    @InjectRepository(AddressType) private repo: Repository<AddressType>,
  ) {}

  create(createAddressTypeDto: CreateAddressTypeDto) {
    const type = this.repo.create(createAddressTypeDto);
    return this.repo.save(type);
  }

  getAllAddressType() {
    return this.repo.find();
  }
}
