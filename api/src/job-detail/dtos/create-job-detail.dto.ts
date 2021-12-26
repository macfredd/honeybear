import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Consumer } from '../../consumers/consumer.entity';
import { thanZero } from '../../utils/constants';
import { Address } from '../../address/address.entity';

export class CreateJobDetailDto {

  @IsInt()
  consumer: Consumer;

  @IsNumber()
  @Min(0, {message: thanZero})
  packageAmount: number;

  @IsNumber()
  @Min(0, {message: thanZero})
  deliveryAmount: number;

  @IsNumber()
  @Min(0, {message: thanZero})
  taxAmount: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsInt()
  deliveryAddress: Address;

}
