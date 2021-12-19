import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../address/address.entity';
import { EntityType } from '../utils/enums';

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
