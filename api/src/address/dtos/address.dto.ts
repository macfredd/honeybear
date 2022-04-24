import { AddressType } from '../../address-type/address-type.entity';
import { Expose, Type } from 'class-transformer';
import { AddressTypeDto } from '../../address-type/dtos/address-type.dto';

export class AddressDto {
  @Expose()
  id: number;

  @Expose()
  streetLine1: string;

  @Expose()
  streetLine2: string;

  @Expose()
  city: string;

  @Expose()
  state: string;

  @Expose()
  postalCode: string;

  @Expose()
  country: string;

  @Expose()
  @Type(() => AddressTypeDto)
  addressType: AddressType;
}
