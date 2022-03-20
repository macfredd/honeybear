import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobCandidateController } from './job-candidate.controller';
import { JobCandidateService } from './job-candidate.service';
import { JobCandidate } from './job-candidate.entity';
import { JobsModule } from '../jobs/jobs.module';

@Module({
  imports: [TypeOrmModule.forFeature([JobCandidate]), JobsModule],
  controllers: [JobCandidateController],
  providers: [JobCandidateService],
})
export class JobCandidateModule {}
