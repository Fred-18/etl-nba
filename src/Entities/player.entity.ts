import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Teams } from './teams.entity';

@Entity()
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: number;

  @Column('json')
  birth: {
    date: string;
    country: string;
  };
  @Column('json')
  height: {
    feet: number;
    inches: number;
    meters: number;
  };
  @Column('json')
  weight: {
    pounds: number;
    kilograms: number;
  };
  @Column()
  college: string;
  @Column()
  affiliation: string;
  @Column('json')
  league: {
    standard: {
      jersey: number;
      active: boolean;
      pos: string;
    };
  };
  @OneToOne(() => Teams)
  @JoinColumn()
  team: Teams;
}
