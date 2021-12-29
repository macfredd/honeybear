import { IsString, Length } from 'class-validator';

export class CreateVehicleTypeDto {

  @IsString()
  @Length(2,75)
  type: string;
}
