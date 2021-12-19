import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consumer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125})
  firstName: string;

  @Column({length: 125, nullable: true})
  lastName: string;

  @Column({length: 125})
  surname: string;

  @Column({length: 50})
  phone: string;

  @Column({length: 150, unique: true})
  licenseNo: string;

  @Column({type: 'date'})
  licenseExpiry: Date;

  @Column({length: 100})
  stateIssued: string;

}
