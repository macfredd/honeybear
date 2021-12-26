import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Driver } from '../drivers/driver.entity';
import { VehicleType } from '../vehicle-type/vehicle-type.entity';
import { JobCandidate } from '../job-candidate/job-candidate.entity';

@Entity()
export class Vehicle {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125})
  make: string;

  @Column({length: 125})
  model: string;

  @Column()
  year: number;

  @Column({length: 17, unique: true})
  vim: string;

  @ManyToOne(() => Driver, (driver) => driver.vehicles, {nullable: false})
  @JoinColumn({name: 'driver_id'})
  driver: Driver;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.vehicles, {nullable: false})
  @JoinColumn({name: 'vehicle_type_id'})
  vehicleType: VehicleType;

  @OneToMany(() => JobCandidate, (jobCandidate) => jobCandidate.vehicle)
  jobCandidate: JobCandidate[];

  @CreateDateColumn({name: "created_date"})
  createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
  updatedDate: Date;

}
