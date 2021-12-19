import { Body, Controller, Post } from '@nestjs/common';
import { GrowersService } from './growers.service';
import { CreateGrowerDto } from './dtos/create-grower.dto';

@Controller('growers')
export class GrowersController {

  constructor(private growersService: GrowersService) {}

  @Post()
  createGrower(@Body() body: CreateGrowerDto) {
    const grower = this.growersService.create(body);
    return grower;
  }
}
