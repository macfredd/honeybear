import { Expose } from 'class-transformer';

export class AddressTypeDto {
  @Expose()
  id: number;

  @Expose()
  type: string;

  @Expose()
  code: string;
}
