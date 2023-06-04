import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';
import { CreateDriverDto } from './dtos/create-driver.dto';

@Injectable()
export class DriversService {
  constructor(@InjectRepository(Driver) private repo: Repository<Driver>) {}

  create(driverDto: CreateDriverDto) {
    const driver = this.repo.create(driverDto);
    return this.repo.save(driver);
  }

  getDriverById(driverId: number) {
    return this.repo.findOneBy({ id: driverId });
  }
}
