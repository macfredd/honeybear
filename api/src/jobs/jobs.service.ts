import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dtos/create-job.dto';
import { JobDetail } from '../job-detail/job-detail.entity';
import { JobStatus, JobDetailStatus } from '../utils/enums';
import { Driver } from '../drivers/driver.entity';
import { GrowersService } from '../growers/growers.service';
import { DriversService } from '../drivers/drivers.service';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job) private repo: Repository<Job>,
    private growerService: GrowersService,
    private driverService: DriversService,
  ) {}

  async create(createJobDto: CreateJobDto) {
    const job = this.repo.create(createJobDto);
    job.jobDetail = createJobDto.detail as Partial<JobDetail[]>;

    Object.values(job.jobDetail).forEach((detail) => {
      detail.totalAmount =
        detail.packageAmount + detail.deliveryAmount + detail.taxAmount;

      if ('deliveryAddress' in detail) {
        //const address = await this.addressBookService.findBy .getDriverById(detail.deliveryAddress)
        //detail.deliveryAddress = detail.deliveryAddress;
      }
    });

    return this.repo.save(job);
  }

  getJobById(jobId: number) {
    return this.repo.findOne(jobId);
  }

  async publishJob(jobId: number) {
    const job = await this.repo.findOne(jobId);

    if (job == undefined) throw new BadRequestException('Job does not exists!');

    if (job.status != JobStatus.CREATED)
      throw new BadRequestException(
        'Incorrect Job Status: [' + job.status + '], Expected [created]',
      );

    job.publishDate = new Date();
    job.status = JobStatus.PUBLISHED;

    await this.repo.save(job);
  }

  async assignJob(job: Job, driver: Driver) {
    job.status = JobStatus.ASSIGNED;
    job.assignedDate = new Date();
    job.driver = driver;

    return await this.repo.save(job);
  }

  async startJob(jobId: number) {
    const job = await this.repo.findOne(jobId);

    if (job == undefined) throw new BadRequestException('Job does not exists!');

    if (job.status != JobStatus.ASSIGNED)
      throw new BadRequestException(
        'Incorrect Job Status: [' + job.status + '], Expected [assigned]',
      );

    //TODO: Validate that only the assigned driver or an admin role can start a job.
    job.status = JobStatus.INPROGRESS;
    job.startDate = new Date();

    return await this.repo.save(job);
  }

  async completeJob(jobId: number) {
    const job = await this.repo.findOne(jobId);

    if (job == undefined) throw new BadRequestException('Job does not exists!');

    if (job.status != JobStatus.INPROGRESS)
      throw new BadRequestException(
        'Incorrect Job Status: [' + job.status + '], Expected [in progress]',
      );

    //TODO: Validate that only the assigned driver or an admin role can complete a job.
    job.status = JobStatus.COMPLETED;
    job.endDate = new Date();

    return await this.repo.save(job);
  }

  async getDriverDetailForBilling(jobId: number, driverId: number) {
    return await this.repo
      .createQueryBuilder('job')
      .innerJoinAndSelect('job.jobDetail', 'jobDetail')
      .where('job.id = :jobId and job.driver_id = :driverId')
      .andWhere('job.status = :jobStatus')
      .andWhere('jobDetail.status = :paymentStatus')
      .setParameters({
        jobId: jobId,
        driverId: driverId,
        jobStatus: JobStatus.COMPLETED,
        paymentStatus: JobDetailStatus.COLLECT,
      })
      .getRawMany();
  }

  async getJobByGrowerId(growerId: number) {
    return this.repo.find({
      relations: ['grower'],
      where: {
        grower: {
          id: growerId,
        },
      },
    });
  }

  async getJobByGrowerIdAndStatus(growerId: number, status: JobStatus) {
    return this.repo.find({
      relations: ['grower'],
      where: {
        grower: {
          id: growerId,
        },
        status: status,
      },
    });
  }

  async getJobByDriverId(driveId: number) {
    return this.repo.find({
      relations: ['driver'],
      where: {
        driver: {
          id: driveId,
        },
      },
    });
  }

  async getJobByDriverIdAndStatus(driverId: number, status: JobStatus) {
    return this.repo.find({
      relations: ['driver'],
      where: {
        driver: {
          id: driverId,
        },
        status: status,
      },
    });
  }
}
