import {
  IsDate,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGrowerDto {
  @IsString()
  @Length(2, 255)
  name: string;

  @IsOptional()
  @IsString()
  @Length(2, 255)
  tradeName: string;

  @IsString()
  @MaxLength(100)
  licenseNo: string;

  @IsDate()
  @Type(() => Date)
  licenseExpiry: Date;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsPhoneNumber()
  @MaxLength(50)
  phone: string;
}
