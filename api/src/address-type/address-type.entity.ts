import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Address } from '../address/address.entity';

@Entity()
export class AddressType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125, unique:true})
  type: string;

  @Column({length: 2, unique: true})
  code: string;

  @OneToMany(() => Address, (address) => address.addressType)
  addresses: Address[];

  @CreateDateColumn({name: "created_date"})
  createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
  updatedDate: Date;

}
