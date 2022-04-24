import { Expose } from 'class-transformer';

export class DocumentTypeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  requiredValidation: boolean;
}
