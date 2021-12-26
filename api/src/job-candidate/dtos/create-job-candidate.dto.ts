import { IsInt } from 'class-validator';
import { Job } from '../../jobs/job.entity';
import { Vehicle } from '../../vehicles/vehicle.entity';
import { Driver } from '../../drivers/driver.entity';

export class CreateJobCandidateDto {

  @IsInt()
  job: Job;

  @IsInt()
  driver: Driver;

  @IsInt()
  vehicle: Vehicle;

}
