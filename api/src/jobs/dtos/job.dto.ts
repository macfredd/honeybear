import { Grower } from '../../growers/grower.entity';
import { Driver } from '../../drivers/driver.entity';
import { JobStatus } from '../../utils/enums';
import { Expose, Type } from 'class-transformer';
import { GrowerDto } from '../../growers/dtos/grower.dto';
import { DriverDto } from '../../drivers/dtos/driver.dto';

export class JobDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => GrowerDto)
  grower: Grower;

  @Expose()
  @Type(() => DriverDto)
  driver: Driver;

  @Expose()
  description: string;

  @Expose()
  publishDate: Date;

  @Expose()
  assignedDate: Date;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date;

  @Expose()
  status: JobStatus;
}
