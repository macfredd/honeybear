import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { VehicleDto } from './dtos/vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}

  @Post()
  createVehicle(@Body() body: CreateVehicleDto) {
    const vehicle = this.vehiclesService.create(body);
    return vehicle;
  }

  @Serialize(VehicleDto)
  @Get('/:id')
  getVehicleById(@Param('id') id: number) {
    return this.vehiclesService.getVehicleById(id);
  }

  @Serialize(VehicleDto)
  @Get('/driver/:id')
  getVehicleByDriverId(@Param('id') driverId: number) {
    return this.vehiclesService.getVehicleByDriverId(driverId);
  }
}
