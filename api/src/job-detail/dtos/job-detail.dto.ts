import { Job } from '../../jobs/job.entity';
import { Consumer } from '../../consumers/consumer.entity';
import { JobDetailStatus } from '../../utils/enums';
import { Address } from '../../address/address.entity';
import { Expose, Type } from 'class-transformer';
import { ConsumerDto } from '../../consumers/dtos/consumer.dto';
import { AddressDto } from '../../address/dtos/address.dto';

export class JobDetailDto {
  @Expose()
  id: number;

  @Expose()
  description: string;

  @Expose()
  job: Job;

  @Expose()
  @Type(() => ConsumerDto)
  consumer: Consumer;

  @Expose()
  packageAmount: number;

  @Expose()
  deliveryAmount: number;

  @Expose()
  taxAmount: number;

  @Expose()
  totalAmount: number;

  @Expose()
  status: JobDetailStatus;

  @Expose()
  @Type(() => AddressDto)
  deliveryAddress: Address;
}
