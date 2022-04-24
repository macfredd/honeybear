import { Expose } from 'class-transformer';

export class LocationDto {
  @Expose()
  latitude: number;

  @Expose()
  longitude: number;

  @Expose()
  createdDate: Date;
}
