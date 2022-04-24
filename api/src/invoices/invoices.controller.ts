import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dtos/create-invoice.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { InvoiceDto } from './dtos/invoice.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Post()
  createInvoice(@Body() body: CreateInvoiceDto) {
    const invoice = this.invoicesService.createDriverInvoice(
      body.driverId,
      body.jobId,
    );
    return invoice;
  }

  @Serialize(InvoiceDto)
  @Get('/:id')
  getInvoiceById(@Param('id') id: number) {
    return this.invoicesService.getInvoiceById(id);
  }

  @Serialize(InvoiceDto)
  @Get('driver/:id')
  getInvoiceByDriverId(@Param('id') driverId: number) {
    return this.invoicesService.getInvoiceByDriverId(driverId);
  }
}
