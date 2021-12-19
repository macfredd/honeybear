import { IsString, Length } from 'class-validator';

export class CreateAddressTypeDto {

  @IsString()
  @Length(2, 125)
  type: string;

}
