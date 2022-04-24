import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dtos/create-document.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { DocumentDto } from './dtos/document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Post()
  createDocument(@Body() body: CreateDocumentDto) {
    const document = this.documentsService.create(body);
    return document;
  }

  @Serialize(DocumentDto)
  @Get('/:id')
  getDocumentById(@Param('id') id: number) {
    return this.documentsService.getDocumentById(id);
  }

  @Serialize(DocumentDto)
  @Get('/owner/:id')
  getDocumentByOwnerId(@Param('id') ownerId: number) {
    return this.documentsService.getDocumentByOwnerId(ownerId);
  }
}
