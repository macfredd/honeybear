import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAddressDto } from './dtos/create-address.dto';
import { AddressService } from './address.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AddressDto } from './dtos/address.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  createAddress(@Body() body: CreateAddressDto) {
    const address = this.addressService.create(body);
    return address;
  }

  @Serialize(AddressDto)
  @Get('/:id')
  getAddressById(@Param('id') id: number) {
    return this.addressService.getAddressById(id);
  }
}
