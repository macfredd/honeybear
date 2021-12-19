import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EntityType } from '../documents/document.entity';
import { Address } from '../address/address.entity';

@Entity()
export class AddressBook {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: EntityType,
  })
  entityType: EntityType;

  @ManyToOne(() => Address, (address) => address.addressBook, {nullable: false})
  address: Address;

  @Column()
  entityId: number;

}
