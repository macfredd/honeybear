import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { Invoice } from './invoice.entity';
import { DriversModule } from '../drivers/drivers.module';
import { JobsModule } from '../jobs/jobs.module';
import { JobDetailModule } from '../job-detail/job-detail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice]),
    DriversModule,
    JobsModule,
    JobDetailModule
  ],
  providers: [InvoicesService],
  controllers: [InvoicesController]
})
export class InvoicesModule {}
