import {
  IsInt,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { AddressType } from '../../address-type/address-type.entity';

export class CreateAddressDto {
  @IsString()
  @MaxLength(255)
  streetLine1: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  streetLine2: string;

  @IsString()
  @Length(2, 100)
  city: string;

  @IsString()
  @Length(2, 100)
  state: string;

  @IsString()
  @MaxLength(25)
  postalCode: string;

  @IsString()
  @Length(2, 75)
  country: string;

  @IsInt()
  addressType: AddressType;
}
