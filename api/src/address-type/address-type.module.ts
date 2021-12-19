import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressTypeController } from './address-type.controller';
import { AddressTypeService } from './address-type.service';
import { AddressType } from './address-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressType])],
  controllers: [AddressTypeController],
  providers: [AddressTypeService]
})
export class AddressTypeModule {}
