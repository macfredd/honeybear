import { Body, Controller, Post } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './dtos/create-consumer-dto';

@Controller('consumers')
export class ConsumersController {

  constructor(private consumersService: ConsumersService) {}

  @Post()
  createConsumer(@Body() body: CreateConsumerDto) {
    const consumer = this.consumersService.create(body)
    return consumer;
  }
}
