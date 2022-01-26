import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobDetailController } from './job-detail.controller';
import { JobDetailService } from './job-detail.service';
import { JobDetail } from './job-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobDetail])],
  controllers: [JobDetailController],
  providers: [JobDetailService],
  exports: [JobDetailService],
})
export class JobDetailModule {}
