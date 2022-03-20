import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Job } from '../jobs/job.entity';

@Entity()
export class Grower {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true, name: 'trade_name' })
  tradeName: string;

  @Column({ length: 100, unique: true, name: 'license_no' })
  licenseNo: string;

  @Column({ type: 'date', name: 'license_expiry' })
  licenseExpiry: Date;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 50 })
  phone: string;

  // Growers are initially created without an account.
  @Column({ nullable: true, name: 'account_id' })
  accountId: number;

  @OneToMany(() => Job, (job) => job.grower)
  jobs: Job[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
