import { Body, Controller, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dtos/create-invoice.dto';

@Controller('invoices')
export class InvoicesController {

  constructor(private invoicesService: InvoicesService) {}

  @Post()
  createInvoice(@Body() body: CreateInvoiceDto) {
    const invoice = this.invoicesService.createDriverInvoice(body.driverId, body.jobId)
    return invoice;
  }
}
