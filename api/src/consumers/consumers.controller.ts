import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './dtos/create-consumer.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ConsumerDto } from './dtos/consumer.dto';

@Controller('consumers')
export class ConsumersController {
  constructor(private consumersService: ConsumersService) {}

  @Post()
  createConsumer(@Body() body: CreateConsumerDto) {
    const consumer = this.consumersService.create(body);
    return consumer;
  }

  @Serialize(ConsumerDto)
  @Get('/:id')
  getConsumerById(@Param('id') id: number) {
    return this.consumersService.getConsumerById(id);
  }
}
