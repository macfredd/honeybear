import { Body, Controller, Post } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { CreateVehicleTypeDto } from './dtos/create-vehicle-type-dto';

@Controller('vehicle-type')
export class VehicleTypeController {

  constructor(private vehicleTypeService: VehicleTypeService) {}

  @Post()
  createVehicleType(@Body() body: CreateVehicleTypeDto) {
    const type = this.vehicleTypeService.create(body);
    return type;
  }
}
