import { Expose, Type } from 'class-transformer';
import { Driver } from '../../drivers/driver.entity';
import { InvoiceStatus } from '../../utils/enums';
import { InvoiceDetail } from '../../invoice-detail/invoice-detail.entity';
import { DriverDto } from '../../drivers/dtos/driver.dto';
import { InvoiceDetailDto } from '../../invoice-detail/dtos/invoice-detail.dto';

export class InvoiceDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => DriverDto)
  driver: Driver;

  @Expose()
  paymentDate: Date;

  @Expose()
  voidDate: Date;

  @Expose()
  status: InvoiceStatus;

  @Expose()
  @Type(() => InvoiceDetailDto)
  invoiceDetail: InvoiceDetail[];

  @Expose()
  totalPackageAmount: number;

  @Expose()
  totalDeliveryAmount: number;

  @Expose()
  totalTaxAmount: number;

  @Expose()
  grandTotalAmount: number;
}
