import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { JobCandidate } from './job-candidate.entity';
import { Repository } from 'typeorm';
import { CreateJobCandidateDto } from './dtos/create-job-candidate.dto';

@Injectable()
export class JobCandidateService {

  constructor(@InjectRepository(JobCandidate) private repo: Repository<JobCandidate>) {}

  create(jobCandidateDto: CreateJobCandidateDto) {
    const jobCandidate = this.repo.create(jobCandidateDto);
    return this.repo.save(jobCandidate);
  }
}
