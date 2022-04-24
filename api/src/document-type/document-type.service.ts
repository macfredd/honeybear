import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentType } from './document-type.entity';
import { Repository } from 'typeorm';
import { CreateDocumentTypeDto } from './dtos/create-document-type.dto';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectRepository(DocumentType) private repo: Repository<DocumentType>,
  ) {}

  create(createDocumentTypeDto: CreateDocumentTypeDto) {
    const document_type = this.repo.create(createDocumentTypeDto);
    return this.repo.save(document_type);
  }

  getAllDocumentTypes() {
    return this.repo.find();
  }
}
