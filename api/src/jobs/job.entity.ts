import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn, JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grower } from '../growers/grower.entity';
import { JobStatus } from '../utils/enums';
import { Driver } from '../drivers/driver.entity';
import { JobDetail } from '../job-detail/job-detail.entity';
import { JobCandidate } from '../job-candidate/job-candidate.entity';
import { Location } from '../locations/location.entity';

@Entity()
export class Job {

  @PrimaryGeneratedColumn()
  id: number;

  //Jobs are created by Growers, this is not nullable.
  @ManyToOne(() => Grower, (grower) => grower.jobs,  {nullable: false})
  @JoinColumn({name: 'grower_id'})
  grower: Grower;

  //Nullable, when the jobs is created, there is no driver yet.
  @ManyToOne(() => Driver, (driver) => driver.jobs)
  @JoinColumn({name: 'driver_id'})
  driver: Driver;

  @Column({length: 500, nullable: true})
  description: string;

  @Column({type: 'timestamp', nullable: true, name: 'published_date'})
  publishDate: Date;

  @Column({type: 'timestamp', nullable: true, name: 'assigned_date'})
  assignedDate: Date;

  @Column({type: 'timestamp', nullable: true, name: 'start_date'})
  startDate: Date;

  @Column({type: 'timestamp', nullable: true, name: 'end_date'})
  endDate: Date;

  @Column({
    type: 'enum',
    enum: JobStatus,
    default: JobStatus.CREATED,
  })
  status: JobStatus;

  @OneToMany(() => JobDetail, (jobDetail) => jobDetail.job,{ cascade: true, eager:  true})
  jobDetail: JobDetail[];

  @OneToMany(() => JobCandidate, (jobCandidate) => jobCandidate.job,{ cascade: true})
  jobCandidate: JobCandidate[];

  @OneToMany(() => Location, (location) => location.job,{ cascade: true})
  locations: Location[];

  @CreateDateColumn({name: "created_date"})
  createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
  updatedDate: Date;


}
