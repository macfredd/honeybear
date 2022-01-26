import { Body, Controller, Post } from '@nestjs/common';
import { JobCandidateService } from './job-candidate.service';
import { CreateJobCandidateDto } from './dtos/create-job-candidate.dto';
import { SelectJobCandidateDto } from './dtos/select-job-candidate.dto';

@Controller('job-candidate')
export class JobCandidateController {

  constructor(private jobCandidateService: JobCandidateService) {}

  @Post()
  createJobCandidate(@Body() body: CreateJobCandidateDto) {
    const jobCandidate = this.jobCandidateService.create(body);
    return jobCandidate;
  }

  @Post('assign')
  assignCandidate(@Body() body: SelectJobCandidateDto) {
    const assignCandidate =
      this.jobCandidateService.assignCandidate(body)

    return assignCandidate;
  }
}
