import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125})
  firstName: string;

  @Column({length: 125, nullable: true})
  lastName: string;

  @Column({length: 125})
  surname: string;

  @Column({type: 'date'})
  birthDate: Date;

  @Column({length: 255, unique: true})
  email: string;

  @Column({length: 50})
  phone: string;

  @Column({length: 150, unique: true})
  licenseNo: string;

  @Column({type: 'date'})
  licenseExpiry: Date;

  @Column({length: 10})
  licenseClass: string;

  @Column({length: 100})
  stateIssued: string;

  // Drivers are initially created without an account.
  @Column({nullable: true})
  accountId: number;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
  vehicles: Vehicle[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

}
