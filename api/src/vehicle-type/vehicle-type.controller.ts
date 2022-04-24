import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { CreateVehicleTypeDto } from './dtos/create-vehicle-type.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { VehicleTypeDto } from './dtos/vehicle-type.dto';

@Controller('vehicle-type')
export class VehicleTypeController {
  constructor(private vehicleTypeService: VehicleTypeService) {}

  @Post()
  createVehicleType(@Body() body: CreateVehicleTypeDto) {
    const type = this.vehicleTypeService.create(body);
    return type;
  }

  @Serialize(VehicleTypeDto)
  @Get()
  getVehicleTypes() {
    return this.vehicleTypeService.getVehicleTypes();
  }
}
