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

    const driver = await this.driverService.getDriverById(driverId);

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

      invoiceDetail.packageAmount = detail['jobDetail_package_amount'];
      invoiceDetail.deliveryAmount = detail['jobDetail_delivery_amount'];
      invoiceDetail.taxAmount = detail['jobDetail_tax_amount'];
      invoiceDetail.totalAmount = detail['jobDetail_total_amount'];
      invoice.invoiceDetail.push(invoiceDetail);
    }

    const newInvoice = await this.repo.create(invoice);
    const bill = this.repo.save(newInvoice);

    //Update jobDetailStatus
    await this.jobDetailService.changeStatusToBilled(jobId);

    return bill;
  }

  getInvoiceById(invoiceId: number) {
    return this.repo.findOneBy({ id: invoiceId });
  }

  async getInvoiceByDriverId(driverId: number) {
    return this.repo.find({
      relations: ['driver'],
      where: {
        driver: {
          id: driverId,
        },
      },
    });
  }
}
