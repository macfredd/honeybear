import { Expose } from 'class-transformer';

export class GrowerDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  tradeName: string;

  @Expose()
  licenseNo: string;

  @Expose()
  licenseExpiry: Date;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  accountId: number;
}
