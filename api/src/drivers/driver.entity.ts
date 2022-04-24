import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';
import { Job } from '../jobs/job.entity';
import { JobCandidate } from '../job-candidate/job-candidate.entity';
import { Location } from '../locations/location.entity';
import { Invoice } from '../invoices/invoice.entity';
import { calculateAge } from '../utils/functions';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 125, name: 'first_name' })
  firstName: string;

  @Column({ length: 125, nullable: true, name: 'last_name' })
  lastName: string;

  @Column({ length: 125 })
  surname: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 50 })
  phone: string;

  @Column({ length: 150, unique: true, name: 'license_no' })
  licenseNo: string;

  @Column({ type: 'date', name: 'license_expiry' })
  licenseExpiry: Date;

  @Column({ length: 10, name: 'license_class' })
  licenseClass: string;

  @Column({ length: 100, name: 'state_issued' })
  stateIssued: string;

  // Drivers are initially created without an account.
  @Column({ nullable: true, name: 'account_id' })
  accountId: number;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver, { eager: true })
  vehicles: Vehicle[];

  @OneToMany(() => Job, (job) => job.driver)
  jobs: Job[];

  @OneToMany(() => JobCandidate, (jobCandidate) => jobCandidate.driver)
  jobCandidate: JobCandidate[];

  @OneToMany(() => Location, (location) => location.driver, { cascade: true })
  locations: Location[];

  @OneToMany(() => Invoice, (invoice) => invoice.driver, { cascade: true })
  invoices: Invoice[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  private get fullName(): string {
    return `${this.firstName} ${this.lastName} ${this.surname}`;
  }

  /**
   * Calculate the Driver Age.
   */
  private get age(): number {
    return calculateAge(this.birthDate);
  }
}
