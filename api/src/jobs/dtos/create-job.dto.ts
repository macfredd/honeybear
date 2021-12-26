import { IsArray, IsInt, IsOptional, IsString, Length, ValidateNested } from 'class-validator';
import { Grower } from '../../growers/grower.entity';
import { Type } from 'class-transformer';
import { CreateJobDetailDto } from '../../job-detail/dtos/create-job-detail.dto';

export class CreateJobDto {

  @IsInt()
  grower: Grower;

  @IsOptional()
  @IsString()
  @Length(1,500)
  description: string;

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CreateJobDetailDto)
  detail: CreateJobDetailDto[];

}
