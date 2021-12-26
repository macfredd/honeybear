import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobCandidateController } from './job-candidate.controller';
import { JobCandidateService } from './job-candidate.service';
import { JobCandidate } from './job-candidate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobCandidate])],
  controllers: [JobCandidateController],
  providers: [JobCandidateService]
})
export class JobCandidateModule {}
