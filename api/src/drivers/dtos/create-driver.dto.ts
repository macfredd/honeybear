import { IsDate, IsEmail, IsOptional, IsPhoneNumber, IsString, Length, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDriverDto {

  @IsString()
  @Length(1,125)
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(1,125)
  lastName: string;

  @Length(1,125)
  surname: string;

  @IsDate()
  @Type(() => Date)
  birthDate: Date;

  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @Length(5,150)
  licenseNo: string;

  @IsDate()
  @Type(() => Date)
  licenseExpiry: Date;

  @IsString()
  @Length(1,10)
  licenseClass: string;

  @IsString()
  @Length(2,100)
  stateIssued: string;

}
