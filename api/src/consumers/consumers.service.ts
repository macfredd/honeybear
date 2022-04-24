import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consumer } from './consumer.entity';
import { Repository } from 'typeorm';
import { CreateConsumerDto } from './dtos/create-consumer.dto';

@Injectable()
export class ConsumersService {
  constructor(@InjectRepository(Consumer) private repo: Repository<Consumer>) {}

  create(createConsumerDto: CreateConsumerDto) {
    const consumer = this.repo.create(createConsumerDto);
    return this.repo.save(consumer);
  }

  getConsumerById(id: number) {
    return this.repo.findOne(id);
  }
}
