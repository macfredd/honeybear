import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AddressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
