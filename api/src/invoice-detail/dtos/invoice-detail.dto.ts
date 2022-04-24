import { JobDetail } from '../../job-detail/job-detail.entity';
import { Expose, Transform } from 'class-transformer';

export class InvoiceDetailDto {
  @Expose()
  id: number;

  @Expose()
  @Transform(({ value }) => value.description)
  jobDetail: JobDetail;

  @Expose()
  packageAmount: number;

  @Expose()
  deliveryAmount: number;

  @Expose()
  taxAmount: number;

  @Expose()
  totalAmount: number;
}
