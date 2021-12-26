import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';
import { Job } from '../jobs/job.entity';
import { JobCandidate } from '../job-candidate/job-candidate.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125, name: 'first_name'})
  firstName: string;

  @Column({length: 125, nullable: true, name: 'last_name'})
  lastName: string;

  @Column({length: 125})
  surname: string;

  @Column({type: 'date', name: 'birth_date'})
  birthDate: Date;

  @Column({length: 255, unique: true})
  email: string;

  @Column({length: 50})
  phone: string;

  @Column({length: 150, unique: true, name: 'license_no'})
  licenseNo: string;

  @Column({type: 'date', name: 'license_expiry'})
  licenseExpiry: Date;

  @Column({length: 10, name: 'license_class'})
  licenseClass: string;

  @Column({length: 100, name: 'state_issued'})
  stateIssued: string;

  // Drivers are initially created without an account.
  @Column({nullable: true, name: 'account_id'})
  accountId: number;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
  vehicles: Vehicle[];

  @OneToMany(() => Job, (job) => job.grower)
  jobs: Job[];

  @OneToMany(() => JobCandidate, (jobCandidate) => jobCandidate.job)
  jobCandidate: JobCandidate[];

  @CreateDateColumn({name: "created_date"})
  createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
  updatedDate: Date;


}
