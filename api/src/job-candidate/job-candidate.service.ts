import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobCandidate } from './job-candidate.entity';
import { Repository } from 'typeorm';
import { CreateJobCandidateDto } from './dtos/create-job-candidate.dto';
import { SelectJobCandidateDto } from './dtos/select-job-candidate.dto';
import { JobStatus } from '../utils/enums';
import { JobsService } from '../jobs/jobs.service';

@Injectable()
export class JobCandidateService {
  constructor(
    @InjectRepository(JobCandidate) private repo: Repository<JobCandidate>,
    private jobsService: JobsService,
  ) {}

  create(jobCandidateDto: CreateJobCandidateDto) {
    const jobCandidate = this.repo.create(jobCandidateDto);
    return this.repo.save(jobCandidate);
  }

  async assignCandidate(selectJobCandidate: SelectJobCandidateDto) {
    const jobCandidate = await this.repo.findOne({
      where: {
        job: selectJobCandidate.jobId,
        driver: selectJobCandidate.driverId,
        vehicle: selectJobCandidate.vehicleId,
      },
    });

    if (jobCandidate == undefined)
      throw new BadRequestException('There is no valid candidate record');

    if (jobCandidate.selected)
      throw new BadRequestException(
        'This candidate was already assigned to the requested Job',
      );

    if (jobCandidate.job.status != JobStatus.PUBLISHED)
      throw new BadRequestException(
        'Incorrect Job Status: [' +
          jobCandidate.job.status +
          '], Expected [published]',
      );

    //Update JOB
    const updatedJob = await this.jobsService.assignJob(
      jobCandidate.job,
      jobCandidate.driver,
    );

    //Update JOBCandidate only if the JOB was assigned
    if (updatedJob.status == JobStatus.ASSIGNED) {
      jobCandidate.selected = true;
      await this.repo.save(jobCandidate);
    } else {
      throw new InternalServerErrorException(
        'Candidate was not assigned to the requested Job.',
      );
    }
  }

  async getJobCandidatesByJobId(jobId: number) {
    return this.repo.find({
      relations: ['job'],
      where: {
        job: {
          id: jobId,
        },
      },
    });
  }

  async getJobCandidatesByDriverId(driverId: number) {
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
