import { IsInt, IsNumber, IsString, Length, Min } from 'class-validator';
import { Driver } from '../../drivers/driver.entity';
import { VehicleType } from '../../vehicle-type/vehicle-type.entity';

export class CreateVehicleDto {

  @IsString()
  make: string;

  @IsString()
  model:string;

  @IsNumber()
  @Min(2000)
  year: number;

  @IsString()
  @Length(17,17)
  vim: string;

  @IsInt()
  driver: Driver;

  @IsInt()
  vehicleType: VehicleType;
}
