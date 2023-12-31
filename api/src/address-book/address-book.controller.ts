import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddressBookService } from './address-book.service';
import { CreateAddressBookDto } from './dtos/create-address-book.dto';

@Controller('address-book')
export class AddressBookController {
  constructor(private addressBookService: AddressBookService) {}

  @Post()
  createAddressBook(@Body() body: CreateAddressBookDto) {
    const addressBook = this.addressBookService.create(body);
    return addressBook;
  }

  @Get('/entity/:id')
  async getAddressBookByEntityId(@Param('id') entityId: number) {
    const addressBook = await this.addressBookService.getAddressBookByEntityId(
      entityId,
    );
    return addressBook.map((ab) => ({ ...ab.address }));
  }
}
