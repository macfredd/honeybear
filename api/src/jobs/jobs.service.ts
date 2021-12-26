import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dtos/create-job.dto';
import { JobDetail } from '../job-detail/job-detail.entity';
import { AddressBookService } from '../address-book/address-book.service';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private repo:Repository<Job>) {}

  async create(createJobDto: CreateJobDto) {

    const job = this.repo.create(createJobDto);
    job.jobDetail = [];

    for (let detail of createJobDto.detail) {
      let jobdetail = new JobDetail();
      jobdetail.consumer = detail.consumer;
      jobdetail.description = detail.description;
      jobdetail.packageAmount = detail.packageAmount;
      jobdetail.deliveryAmount = detail.deliveryAmount;
      jobdetail.taxAmount = detail.taxAmount;
      jobdetail.totalAmount = jobdetail.packageAmount
        + jobdetail.deliveryAmount
        + jobdetail.taxAmount;


      if ('deliveryAddress' in detail) {
        //const address = await this.addressBookService.findBy .findOne(detail.deliveryAddress)
        //console.log(address)
      }

      jobdetail.deliveryAddress = detail.deliveryAddress;

      job.jobDetail.push(jobdetail);
    }

    return this.repo.save(job);
  }
}
