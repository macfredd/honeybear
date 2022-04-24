import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { JobDetail } from '../job-detail/job-detail.entity';

@Entity()
export class Consumer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 125, name: 'first_name' })
  firstName: string;

  @Column({ length: 125, nullable: true, name: 'last_name' })
  lastName: string;

  @Column({ length: 125 })
  surname: string;

  @Column({ length: 50 })
  phone: string;

  @Column({ length: 150, unique: true, name: 'license_no' })
  licenseNo: string;

  @Column({ type: 'date', name: 'license_expiry' })
  licenseExpiry: Date;

  @Column({ length: 100, name: 'state_issued' })
  stateIssued: string;

  @OneToMany(() => JobDetail, (jobDetail) => jobDetail.job)
  jobDetail: JobDetail;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  private get fullName(): string {
    return `${this.firstName} ${this.lastName} ${this.surname}`;
  }
}
