import { Body, Controller, Post } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dtos/create-document.dto';

@Controller('documents')
export class DocumentsController {

  constructor(private documentsService: DocumentsService) {}

  @Post()
  createDocument(@Body() body: CreateDocumentDto) {
    const document = this.documentsService.create(body);
    return document;
  }
}
