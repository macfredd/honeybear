import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(@InjectRepository(Vehicle) private repo: Repository<Vehicle>) {}

  create(createVehicleDto: CreateVehicleDto) {
    const vehicle = this.repo.create(createVehicleDto);
    return this.repo.save(vehicle);
  }

  getVehicleById(id: number) {
    return this.repo.findOne(id);
  }

  getVehicleByDriverId(driverId: number) {
    return this.repo.find({
      relations: ['driver'],
      where: {
        driver: {
          id: driverId,
        },
      },
    });
  }
}
