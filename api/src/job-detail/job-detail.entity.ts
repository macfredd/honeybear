import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from '../jobs/job.entity';
import { Consumer } from '../consumers/consumer.entity';
import { PayMentStatus } from '../utils/enums';
import { Address } from '../address/address.entity';

@Entity()
export class JobDetail {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 500, nullable: true})
  description: string;

  @ManyToOne(() => Job, (job) => job.jobDetail)
  @JoinColumn({name: 'job_id'})
  job: Job;

  @ManyToOne(() => Consumer, (consumer) => consumer.jobDetail)
  @JoinColumn({name: 'consumer_id'})
  consumer: Consumer;

  @Column({type: 'decimal', name: 'package_amount', precision: 5, scale: 2})
  packageAmount: number;

  @Column({type: 'decimal', name: 'delivery_amount', precision: 5, scale: 2})
  deliveryAmount: number;

  @Column({type: 'decimal', name: 'tax_amount', precision: 5, scale: 2})
  taxAmount: number;

  @Column({type: 'decimal', name: 'total_amount', precision: 5, scale: 2})
  totalAmount: number;

  @Column({
    type: 'enum',
    enum: PayMentStatus,
    default: PayMentStatus.COLLECT,
  })
  status: PayMentStatus;

  @ManyToOne(() => Address, (address) => address.jobDetails, { nullable: false })
  @JoinColumn({name: 'delivery_address_id'})
  deliveryAddress: Address;

}
