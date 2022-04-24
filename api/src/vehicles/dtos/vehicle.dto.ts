import { Expose } from 'class-transformer';

export class VehicleDto {
  @Expose()
  id: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  year: number;

  @Expose()
  vim: string;
}
