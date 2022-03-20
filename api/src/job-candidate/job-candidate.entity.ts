import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Job } from '../jobs/job.entity';
import { Driver } from '../drivers/driver.entity';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
@Unique('unique_job_candidate_constraint', ['job', 'driver'])
export class JobCandidate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Job, (job) => job.jobCandidate, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => Driver, (driver) => driver.jobCandidate, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.jobCandidate, {
    nullable: false,
  })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;

  @Column({ type: 'boolean', default: false })
  selected: boolean;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
