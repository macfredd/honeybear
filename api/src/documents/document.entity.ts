import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { DocumentType } from '../document-type/document-type.entity';

export enum EntityType {
  GROWER = "grower",
  DRIVER = "driver",
  CONSUMER = "consumer"
}

export enum DocumentStatus {
  PENDING ="pending",
  REVISION = "revision",
  APPROVED = "approved",
  REJECTED = "rejected",
}

@Entity()
@Unique(
  "unique_document_constraint",
  ['documentType', 'ownerId']
)
export class Document {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DocumentType, (documentType) => documentType.documents, {nullable: false})
  documentType: DocumentType;

  @Column({
    type: 'enum',
    enum: EntityType,
  })
  entityType: EntityType;

  @Column()
  ownerId: number;

  @Column()
  url: string;

  @Column({
    type: 'enum',
    enum: DocumentStatus,
    default: DocumentStatus.PENDING,
  })
  status: DocumentStatus;
}
