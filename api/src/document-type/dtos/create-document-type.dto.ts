import { IsBoolean, IsString, Length } from 'class-validator';

export class CreateDocumentTypeDto {

  @IsString()
  @Length(2, 125)
  name: string;

  @IsBoolean()
  requiredAuth: boolean;

}
