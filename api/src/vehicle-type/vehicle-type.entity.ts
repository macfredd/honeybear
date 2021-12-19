import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
export class VehicleType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 75, unique: true})
  type: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.vehicleType)
  vehicles: Vehicle[];
}
