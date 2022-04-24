import { EntityType } from '../../utils/enums';
import { Address } from '../../address/address.entity';
import { Expose, Type } from 'class-transformer';
import { AddressDto } from '../../address/dtos/address.dto';

export class AddressBookDto {
  @Expose()
  id: number;

  @Expose()
  entityType: EntityType;

  @Expose()
  @Type(() => AddressDto)
  address: Address;

  @Expose()
  entityId: number;
}
