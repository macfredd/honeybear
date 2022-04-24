import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GrowersService } from './growers.service';
import { CreateGrowerDto } from './dtos/create-grower.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { GrowerDto } from './dtos/grower.dto';

@Controller('growers')
export class GrowersController {
  constructor(private growersService: GrowersService) {}

  @Post()
  createGrower(@Body() body: CreateGrowerDto) {
    const grower = this.growersService.create(body);
    return grower;
  }

  @Serialize(GrowerDto)
  @Get('/:id')
  getGrowerById(@Param('id') id: number) {
    return this.growersService.getGrowerById(id);
  }
}
