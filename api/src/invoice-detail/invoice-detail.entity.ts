import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Invoice } from '../invoices/invoice.entity';
import { JobDetail } from '../job-detail/job-detail.entity';
import { ColumnNumericTransformer } from '../transformers/column-numeric-transformer';

@Entity()
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceDetail)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @OneToOne(() => JobDetail, (jobDetail) => jobDetail.invoiceDetail, {
    eager: true,
  })
  @JoinColumn({ name: 'job_detail_id' })
  jobDetail: JobDetail;

  @Column({
    type: 'decimal',
    name: 'package_amount',
    precision: 5,
    scale: 2,
    nullable: true,
    transformer: new ColumnNumericTransformer(),
  })
  packageAmount: number;

  @Column({
    type: 'decimal',
    name: 'delivery_amount',
    precision: 5,
    scale: 2,
    nullable: true,
    transformer: new ColumnNumericTransformer(),
  })
  deliveryAmount: number;

  @Column({
    type: 'decimal',
    name: 'tax_amount',
    precision: 5,
    scale: 2,
    nullable: true,
    transformer: new ColumnNumericTransformer(),
  })
  taxAmount: number;

  @Column({
    type: 'decimal',
    name: 'total_amount',
    precision: 5,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  totalAmount: number;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
