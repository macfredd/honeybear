import { IsInt } from 'class-validator';
import { Job } from '../../jobs/job.entity';
import { Driver } from '../../drivers/driver.entity';
import { Vehicle } from '../../vehicles/vehicle.entity';

export class CreateJobCandidateDto {

  @IsInt()
  job: Job;

  @IsInt()
  driver: Driver;

  @IsInt()
  vehicle: Vehicle;

}
