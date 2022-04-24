//Using Raphael Soares solution, plus some additional validations and custom messages
//https://stackoverflow.com/questions/59268777/validate-enum-directly-in-controller-function

import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isDefined, isEnum } from 'class-validator';

@Injectable()
export class EnumValidationPipe implements PipeTransform<string, Promise<any>> {
  constructor(private enumEntity: any) {}
  transform(value: string): Promise<any> {
    if (isDefined(value) && isEnum(value, this.enumEntity)) {
      return this.enumEntity[value.toUpperCase()];
    } else {
      let errorMessage: string;
      if (isDefined(value))
        errorMessage = `The value ${value} is not valid. See the acceptable values: ${Object.keys(
          this.enumEntity,
        ).map((key) => this.enumEntity[key])}`;
      else
        errorMessage =
          'Missing parameter for Enum Type, consult API Documentation';

      throw new BadRequestException(errorMessage);
    }
  }
}
