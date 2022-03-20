import { Body, Controller, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dtos/create-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Post()
  createLocation(@Body() body: CreateLocationDto) {
    const location = this.locationsService.create(body);
    return location;
  }
}
