import { IsEnum, IsInt, IsUrl } from 'class-validator';
import { EntityType } from '../document.entity';
import { DocumentType } from '../../document-type/document-type.entity';

export class CreateDocumentDto {

  @IsInt()
  documentType: DocumentType;

  @IsEnum(EntityType, {message: "entityType must be on of: " + Object.values(EntityType).toString()})
  entityType: EntityType;

  @IsInt()
  ownerId: number;

  @IsUrl()
  url: string;

}
