import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  name: number;

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
}
