import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobDetail } from './job-detail.entity';
import { Repository } from 'typeorm';
import { JobDetailStatus } from '../utils/enums';

@Injectable()
export class JobDetailService {

  constructor(@InjectRepository(JobDetail) private repo:Repository<JobDetail>) {}

  async findOne(jobDetailId: number) {
    return await this.repo.findOne(jobDetailId);
  }

  async changeStatusToBilled(jobId: number) {
    await this.repo.createQueryBuilder()
      .update(JobDetail)
      .set({status: JobDetailStatus.BILLED})
      .where('job_id = :jobId', {jobId: jobId})
      .execute();
  }
}
