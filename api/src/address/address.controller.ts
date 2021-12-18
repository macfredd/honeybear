import { Body, Controller, Post } from '@nestjs/common';
import { CreateAddressDto } from './dtos/create-address.dto';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {

  constructor(private addressService: AddressService) {}

  @Post()
  createAddress(@Body() body: CreateAddressDto) {
    const address = this.addressService.create(body);
    return address;
  }
}
