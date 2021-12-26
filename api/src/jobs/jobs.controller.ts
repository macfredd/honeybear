import { Body, Controller, Post } from '@nestjs/common';
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
}
