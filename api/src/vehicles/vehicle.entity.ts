import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Driver } from '../drivers/driver.entity';
import { VehicleType } from '../vehicle-type/vehicle-type.entity';

@Entity()
export class Vehicle {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 125})
  make: string;

  @Column({length: 125})
  model: string;

  @Column()
  year: number;

  @Column({length: 17, unique: true})
  vim: string;

  @ManyToOne(() => Driver, (driver) => driver.vehicles, {nullable: false})
  driver: Driver;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.vehicles, {nullable: false})
  vehicleType: VehicleType;
}
