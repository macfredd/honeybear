import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dtos/create-job.dto';
import { JobStatus } from '../utils/enums';
import { EnumValidationPipe } from '../ValidationPipes/enum-validation-pipe';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post()
  createJob(@Body() body: CreateJobDto) {
    const job = this.jobsService.create(body);
    return job;
  }

  @Post('publish/:id')
  publishJob(@Param('id') id: number) {
    return this.jobsService.publishJob(id);
  }

  @Post('start/:id')
  StartJob(@Param('id') id: number) {
    return this.jobsService.startJob(id);
  }

  @Post('complete/:id')
  completeJob(@Param('id') id: number) {
    return this.jobsService.completeJob(id);
  }

  @Get('/grower/:id')
  getJobByGrowerIdAndStatus(
    @Param('id') growerId: number,
    @Query('status', new EnumValidationPipe(JobStatus)) status: JobStatus,
  ) {
    if (status)
      return this.jobsService.getJobByGrowerIdAndStatus(growerId, status);
    else return this.jobsService.getJobByGrowerId(growerId);
  }

  @Get('/driver/:id')
  getJobByDriverIdAndStatus(
    @Param('id') driverId: number,
    @Query('status', new EnumValidationPipe(JobStatus)) status: JobStatus,
  ) {
    if (status)
      return this.jobsService.getJobByDriverIdAndStatus(driverId, status);
    else return this.jobsService.getJobByDriverId(driverId);
  }
}
