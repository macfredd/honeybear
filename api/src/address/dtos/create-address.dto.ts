import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @MaxLength(255)
  street_line_1: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  street_line_2: string;

  @IsString()
  @MaxLength(100)
  city: string;

  @IsString()
  @MaxLength(100)
  state: string;

  @IsString()
  @MaxLength(25)
  postal_code: string;

  @IsString()
  @MaxLength(75)
  country: string;
}
