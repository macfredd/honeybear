import { Expose } from 'class-transformer';

export class ConsumerDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  surname: string;

  @Expose()
  fullName: string;

  @Expose()
  phone: string;

  @Expose()
  licenseNo: string;

  @Expose()
  licenseExpiry: Date;

  @Expose()
  stateIssued: string;
}
