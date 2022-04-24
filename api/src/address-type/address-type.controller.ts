import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddressTypeService } from './address-type.service';
import { CreateAddressTypeDto } from './dtos/create-address-type.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AddressTypeDto } from './dtos/address-type.dto';

@Controller('address-type')
export class AddressTypeController {
  constructor(private addressTypeService: AddressTypeService) {}

  @Post()
  createAddressType(@Body() body: CreateAddressTypeDto) {
    const type = this.addressTypeService.create(body);
    return type;
  }

  @Get()
  @Serialize(AddressTypeDto)
  getAllAddressType() {
    return this.addressTypeService.getAllAddressType();
  }
}
