import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dtos/create-document-type.dto';
import { DocumentTypeService } from './document-type.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { DocumentTypeDto } from './dtos/document-type.dto';

@Controller('document-type')
export class DocumentTypeController {
  constructor(private documentTypesService: DocumentTypeService) {}

  @Post()
  createDocumentType(@Body() body: CreateDocumentTypeDto) {
    const document_type = this.documentTypesService.create(body);
    return document_type;
  }

  @Serialize(DocumentTypeDto)
  @Get()
  getAllDocumentTypes() {
    return this.documentTypesService.getAllDocumentTypes();
  }
}
