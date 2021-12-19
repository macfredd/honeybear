import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grower {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255})
  name: string;

  @Column({length: 255, nullable: true})
  tradeName: string;

  @Column({length: 100, unique: true})
  licenseNo: string;

  @Column({type: 'date'})
  licenseExpiry: Date;

  @Column({length: 255, unique: true})
  email: string;

  @Column({length: 50})
  phone: string;

  // Growers are initially created without an account.
  @Column({nullable: true})
  accountId: number;

}
