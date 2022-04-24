import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { EntityType } from '../utils/enums';

@Entity()
export class AddressBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: EntityType,
    name: 'entity_type',
  })
  entityType: EntityType;

  @ManyToOne(() => Address, (address) => address.addressBook, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column({ name: 'entity_id' })
  entityId: number;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
