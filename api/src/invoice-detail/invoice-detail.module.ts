import { Module } from '@nestjs/common';
import { InvoiceDetailService } from './invoice-detail.service';
import { InvoiceDetailController } from './invoice-detail.controller';

@Module({
  providers: [InvoiceDetailService],
  controllers: [InvoiceDetailController],
})
export class InvoiceDetailModule {}
