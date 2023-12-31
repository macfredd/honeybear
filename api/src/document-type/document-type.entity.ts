import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Document } from '../documents/document.entity';

@Entity()
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 125, unique: true })
  name: string;

  @Column({
    type: 'boolean',
    default: false,
    name: 'required_validation',
  })
  requiredValidation: boolean;

  @OneToMany(() => Document, (document) => document.documentType)
  documents: Document[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
