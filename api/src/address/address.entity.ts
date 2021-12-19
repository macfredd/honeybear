import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { AddressType } from '../address-type/address-type.entity';
import { AddressBook } from '../address-book/address-book.entity';

@Entity()
@Unique(
  "unique_address_constraint",
  ['streetLine1', 'streetLine2', 'city', 'state', 'postalCode', 'country']
)
export class Address {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255})
  streetLine1: string;

  @Column({length: 255, nullable: true})
  streetLine2: string;

  @Column({length:100})
  city: string;

  @Column({length:100})
  state: string;

  @Column({length:25})
  postalCode: string;

  @Column({length:75})
  country: string;

  @ManyToOne(() => AddressType, (addressType) => addressType.addresses, {nullable: false})
  addressType: AddressType;

  @OneToMany(() => AddressBook, (addressBook) => addressBook.address)
  addressBook: AddressBook[]

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

}
