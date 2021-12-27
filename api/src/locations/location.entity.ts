import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn, Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Job } from '../jobs/job.entity';
import { Driver } from '../drivers/driver.entity';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
@Unique(
  "unique_location_constraint",
  ['job', 'driver', 'latitude', 'longitude', 'createdDate']
)
export class Location {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Job, (job) => job.locations, {nullable: false})
  @JoinColumn({name: 'job_id'})
  job: Job;

  @ManyToOne(() => Driver, (driver) => driver.locations, {nullable: false})
  @JoinColumn({name: 'driver_id'})
  driver: Driver;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.locations, {nullable: false})
  @JoinColumn({name: 'vehicle_id'})
  vehicle: Vehicle;

  @Column({type: 'numeric'})
  latitude: number;

  @Column({type: 'numeric'})
  longitude: number;

  @CreateDateColumn({name: "created_date"})
  createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
  updatedDate: Date;
}
