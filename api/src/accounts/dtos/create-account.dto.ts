import { IsEmail, IsEnum, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAccountDto {

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;

}
