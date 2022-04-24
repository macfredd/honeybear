import { DocumentType } from '../../document-type/document-type.entity';
import { DocumentStatus, EntityType } from '../../utils/enums';
import { Expose, Type } from 'class-transformer';
import { DocumentTypeDto } from '../../document-type/dtos/document-type.dto';

export class DocumentDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => DocumentTypeDto)
  documentType: DocumentType;

  @Expose()
  entityType: EntityType;

  @Expose()
  ownerId: number;

  @Expose()
  url: string;

  @Expose()
  status: DocumentStatus;
}
