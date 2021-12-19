import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Address } from '../address/address.entity';

@Entity()
export class AddressType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125, unique:true})
  type: string;

  @OneToMany(() => Address, (address) => address.addressType)
  addresses: Address[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

}
