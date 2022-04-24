import { Expose } from 'class-transformer';

export class VehicleTypeDto {
  @Expose()
  id: number;

  @Expose()
  type: string;
}
