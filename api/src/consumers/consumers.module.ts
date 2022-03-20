import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumersController } from './consumers.controller';
import { ConsumersService } from './consumers.service';
import { Consumer } from './consumer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consumer])],
  controllers: [ConsumersController],
  providers: [ConsumersService],
})
export class ConsumersModule {}
