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

  @ManyToOne(() => Driver, (driver) => driver.invoices, {
    eager: true,
  })
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
    eager: true,
  })
  invoiceDetail: InvoiceDetail[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  private get totalPackageAmount(): number {
    return this.invoiceDetail.reduce(
      (total, detail) => total + detail.packageAmount,
      0,
    );
  }

  private get totalDeliveryAmount(): number {
    return this.invoiceDetail.reduce(
      (total, detail) => total + detail.deliveryAmount,
      0,
    );
  }

  private get totalTaxAmount(): number {
    return this.invoiceDetail.reduce(
      (total, detail) => total + detail.taxAmount,
      0,
    );
  }

  private get grandTotalAmount(): number {
    return this.invoiceDetail.reduce(
      (total, detail) => total + detail.totalAmount,
      0,
    );
  }
}
