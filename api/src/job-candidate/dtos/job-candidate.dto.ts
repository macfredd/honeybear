import { Job } from '../../jobs/job.entity';
import { Driver } from '../../drivers/driver.entity';
import { Vehicle } from '../../vehicles/vehicle.entity';
import { Expose, Type } from 'class-transformer';
import { JobDto } from '../../jobs/dtos/job.dto';
import { DriverDto } from '../../drivers/dtos/driver.dto';
import { VehicleDto } from '../../vehicles/dtos/vehicle.dto';

export class JobCandidateDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => JobDto)
  job: Job;

  @Expose()
  @Type(() => DriverDto)
  driver: Driver;

  @Expose()
  @Type(() => VehicleDto)
  vehicle: Vehicle;

  @Expose()
  selected: boolean;
}
