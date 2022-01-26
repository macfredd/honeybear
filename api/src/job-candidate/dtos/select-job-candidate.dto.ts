import { IsInt } from 'class-validator';

export class SelectJobCandidateDto {

  @IsInt()
  jobId: number;

  @IsInt()
  driverId: number;

  @IsInt()
  vehicleId: number;

}
