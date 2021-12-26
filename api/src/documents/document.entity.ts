import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { DocumentType } from '../document-type/document-type.entity';
import { DocumentStatus, EntityType } from '../utils/enums';

@Entity()
@Unique(
  "unique_document_constraint",
  ['documentType', 'ownerId']
)
export class Document {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DocumentType, (documentType) => documentType.documents, {nullable: false})
  @JoinColumn({name: 'document_type_id'})
  documentType: DocumentType;

  @Column({
    type: 'enum',
    enum: EntityType,
    name: 'entity_type'
  })
  entityType: EntityType;

  @Column({name: 'owner_id'})
  ownerId: number;

  @Column()
  url: string;

  @Column({
    type: 'enum',
    enum: DocumentStatus,
    default: DocumentStatus.PENDING,
  })
  status: DocumentStatus;

  @CreateDateColumn({name: "created_date"})
  createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
  updatedDate: Date;

}
