import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Driver } from '../drivers/driver.entity';
import { InvoiceStatus } from '../utils/enums';
import { InvoiceDetail } from '../invoice-detail/invoice-detail.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Driver, (driver) => driver.invoices)
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @Column({ type: 'timestamp', nullable: true, name: 'payment_date' })
  paymentDate: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'void_date' })
  voidDate: Date;

  @Column({
    type: 'enum',
    enum: InvoiceStatus,
    default: InvoiceStatus.PENDING,
  })
  status: InvoiceStatus;

  @OneToMany(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.invoice, {
    cascade: true,
  })
  invoiceDetail: InvoiceDetail[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
