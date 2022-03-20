import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { GrowersModule } from './growers/growers.module';
import { DriversModule } from './drivers/drivers.module';
import { ConsumersModule } from './consumers/consumers.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { DocumentsModule } from './documents/documents.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';
import { AddressBookModule } from './address-book/address-book.module';
import { AddressTypeModule } from './address-type/address-type.module';
import { JobsModule } from './jobs/jobs.module';
import { JobDetailModule } from './job-detail/job-detail.module';
import { JobCandidateModule } from './job-candidate/job-candidate.module';
import { LocationsModule } from './locations/locations.module';
import { InvoicesModule } from './invoices/invoices.module';
import { InvoiceDetailModule } from './invoice-detail/invoice-detail.module';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AddressModule,
    GrowersModule,
    DriversModule,
    ConsumersModule,
    DocumentTypeModule,
    DocumentsModule,
    VehiclesModule,
    VehicleTypeModule,
    AddressBookModule,
    AddressTypeModule,
    JobsModule,
    JobDetailModule,
    JobCandidateModule,
    LocationsModule,
    InvoicesModule,
    InvoiceDetailModule,
    AccountsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
