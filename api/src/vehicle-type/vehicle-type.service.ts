import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleType } from './vehicle-type.entity';
import { Repository } from 'typeorm';
import { CreateVehicleTypeDto } from './dtos/create-vehicle-type.dto';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType) private repo: Repository<VehicleType>,
  ) {}

  create(createVehicleTypeDto: CreateVehicleTypeDto) {
    const type = this.repo.create(createVehicleTypeDto);
    return this.repo.save(type);
  }
}
