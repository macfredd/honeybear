import { Body, Controller, Param, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dtos/create-job.dto';

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
}
