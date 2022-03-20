import { Address } from '../../address/address.entity';
import { IsEnum, IsInt } from 'class-validator';
import { EntityType } from '../../utils/enums';

export class CreateAddressBookDto {
  @IsEnum(EntityType, {
    message:
      'entityType must be on of: ' + Object.values(EntityType).toString(),
  })
  entityType: EntityType;

  @IsInt()
  address: Address;

  @IsInt()
  entityId: number;
}
