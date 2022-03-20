import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AccountStatus } from '../utils/enums';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.PENDING,
  })
  status: AccountStatus;

  @Column({ type: 'timestamp', nullable: true, name: 'approved_date' })
  approvedDate: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'active_date' })
  activeDate: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'suspended_date' })
  suspendedDate: Date;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
