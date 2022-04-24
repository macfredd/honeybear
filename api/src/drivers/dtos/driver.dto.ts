import { Expose } from 'class-transformer';

export class DriverDto {
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
  birthDate: Date;

  @Expose()
  age: number;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  licenseNo: string;

  @Expose()
  licenseExpiry: Date;

  @Expose()
  licenseClass: string;

  @Expose()
  stateIssued: string;
}
