import { Body, Controller, Post } from '@nestjs/common';
import { JobCandidateService } from './job-candidate.service';
import { CreateJobCandidateDto } from './dtos/create-job-candidate.dto';

@Controller('job-candidate')
export class JobCandidateController {

  constructor(private jobCandidateService: JobCandidateService) {}

  @Post()
  createJobCandidate(@Body() body: CreateJobCandidateDto) {
    const jobCandidate = this.jobCandidateService.create(body);
    return jobCandidate;

  }
}
