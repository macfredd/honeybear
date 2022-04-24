import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dtos/create-location.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { LocationDto } from './dtos/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Post()
  createLocation(@Body() body: CreateLocationDto) {
    const location = this.locationsService.create(body);
    return location;
  }

  @Serialize(LocationDto)
  @Get('/:vehicle_id')
  getLocationByVehicleId(@Param('vehicle_id') vehicleId: number) {
    return this.locationsService.getLocationByVehicleId(vehicleId);
  }
}
