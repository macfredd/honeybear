import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrowersController } from './growers.controller';
import { GrowersService } from './growers.service';
import { Grower } from './grower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grower])],
  controllers: [GrowersController],
  providers: [GrowersService],
})
export class GrowersModule {}
