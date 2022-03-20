import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { DriversService } from '../drivers/drivers.service';
import { JobsService } from '../jobs/jobs.service';
import { InvoiceStatus } from '../utils/enums';
import { InvoiceDetail } from '../invoice-detail/invoice-detail.entity';
import { JobDetailService } from '../job-detail/job-detail.service';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice) private repo: Repository<Invoice>,
    private driverService: DriversService,
    private jobsService: JobsService,
    private jobDetailService: JobDetailService,
  ) {}

  async createDriverInvoice(driverId: number, jobId: number) {
    const forBilling = await this.jobsService.getDriverDetailForBilling(
      jobId,
      driverId,
    );
    if (!forBilling.length)
      throw new BadRequestException('No billable items were found');

    console.log(forBilling);

    const driver = await this.driverService.findOne(driverId);

    const invoice = new Invoice();
    invoice.driver = driver;
    invoice.status = InvoiceStatus.PENDING;
    invoice.invoiceDetail = [];

    for (const detail of forBilling) {
      const invoiceDetail = new InvoiceDetail();

      const jobDetail = await this.jobDetailService.findOne(
        detail['jobDetail_id'],
      );
      invoiceDetail.jobDetail = jobDetail;

      invoiceDetail.deliveryAmount = detail['jobDetail_delivery_amount'];
      invoiceDetail.totalAmount = detail['jobDetail_delivery_amount'];
      invoice.invoiceDetail.push(invoiceDetail);
    }

    const newInvoce = await this.repo.create(invoice);
    const bill = this.repo.save(newInvoce);

    //Update jobDetailStatus
    await this.jobDetailService.changeStatusToBilled(jobId);

    return bill;
  }
}
