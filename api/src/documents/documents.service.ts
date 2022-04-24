import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from './document.entity';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dtos/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(@InjectRepository(Document) private repo: Repository<Document>) {}

  create(createDocumentDto: CreateDocumentDto) {
    const document = this.repo.create(createDocumentDto);
    return this.repo.save(document);
  }

  getDocumentById(id: number) {
    return this.repo.findOne(id);
  }

  getDocumentByOwnerId(id: number) {
    return this.repo.find({
      ownerId: id,
    });
  }
}
