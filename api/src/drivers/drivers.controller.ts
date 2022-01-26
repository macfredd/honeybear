import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dtos/create-driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private driversService: DriversService) {}

  @Post()
  createDriver(@Body() body: CreateDriverDto) {
    const driver = this.driversService.create(body);
    return driver;
  }

}
