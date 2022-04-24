import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grower } from './grower.entity';
import { CreateGrowerDto } from './dtos/create-grower.dto';

@Injectable()
export class GrowersService {
  constructor(@InjectRepository(Grower) private repo: Repository<Grower>) {}

  create(createGrowerDto: CreateGrowerDto) {
    const grower = this.repo.create(createGrowerDto);
    return this.repo.save(grower);
  }

  getGrowerById(growerId: number) {
    return this.repo.findOne(growerId);
  }
}
