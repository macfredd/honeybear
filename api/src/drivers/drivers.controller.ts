import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dtos/create-driver.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { DriverDto } from './dtos/driver.dto';
import { VehicleDto } from '../vehicles/dtos/vehicle.dto';

@Controller('drivers')
export class DriversController {
  constructor(private driversService: DriversService) {}

  @Post()
  createDriver(@Body() body: CreateDriverDto) {
    const driver = this.driversService.create(body);
    return driver;
  }

  @Serialize(DriverDto)
  @Get('/:id')
  async getDriverById(@Param('id') id: string) {
    return await this.driversService.getDriverById(parseInt(id));
  }

  @Serialize(VehicleDto)
  @Get('/:id/vehicles')
  async getVehiclesByDriverId(@Param('id') id: string) {
    const driver = await this.driversService.getDriverById(parseInt(id));
    return driver.vehicles;
  }
}
