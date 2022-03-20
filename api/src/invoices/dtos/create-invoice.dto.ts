import { IsInt } from 'class-validator';

export class CreateInvoiceDto {
  @IsInt()
  driverId: number;

  @IsInt()
  jobId: number;
}
