import {
  IsDate,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateConsumerDto {
  @IsString()
  @Length(1, 125)
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(1, 125)
  lastName: string;

  @Length(1, 125)
  surname: string;

  @IsPhoneNumber()
  @MaxLength(50)
  phone: string;

  @Length(5, 150)
  licenseNo: string;

  @IsDate()
  @Type(() => Date)
  licenseExpiry: Date;

  @IsString()
  @Length(2, 100)
  stateIssued: string;
}
