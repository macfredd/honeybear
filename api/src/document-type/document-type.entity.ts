import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Document } from '../documents/document.entity';

@Entity()
export class DocumentType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125, unique: true})
  name: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  requiredAuth: boolean;

  @OneToMany(() => Document, (document) => document.documentType)
  documents: Document[];
}
