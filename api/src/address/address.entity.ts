import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255})
  street_line_1: string;

  @Column({length: 255, nullable: true})
  street_line_2: string;

  @Column({length:100})
  city: string;

  @Column({length:100})
  state: string;

  @Column({length:25})
  postal_code: string;

  @Column({length:75})
  country: string;
}
