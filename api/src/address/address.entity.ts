import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { AddressType } from '../address-type/address-type.entity';
import { AddressBook } from '../address-book/address-book.entity';
import { JobDetail } from '../job-detail/job-detail.entity';

@Entity()
@Unique('unique_address_constraint', [
  'streetLine1',
  'streetLine2',
  'city',
  'state',
  'postalCode',
  'country',
])
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, name: 'street_line_1' })
  streetLine1: string;

  @Column({ length: 255, nullable: true, name: 'street_line_2' })
  streetLine2: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  state: string;

  @Column({ length: 25, name: 'postal_code' })
  postalCode: string;

  @Column({ length: 75 })
  country: string;

  @ManyToOne(() => AddressType, (addressType) => addressType.addresses, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'address_type_id' })
  addressType: AddressType;

  @OneToMany(() => AddressBook, (addressBook) => addressBook.address)
  addressBook: AddressBook[];

  @OneToMany(() => JobDetail, (jobDetail) => jobDetail.deliveryAddress)
  jobDetails: JobDetail[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
