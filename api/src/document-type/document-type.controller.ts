import { Body, Controller, Post } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dtos/create-document-type.dto';
import { DocumentTypeService } from './document-type.service'

@Controller('document-type')
export class DocumentTypeController {

  constructor(private documentTypesService: DocumentTypeService) {}

  @Post()
  createDocumentType(@Body() body: CreateDocumentTypeDto) {
    const document_type = this.documentTypesService.create(body);
    return document_type;
  }
}
