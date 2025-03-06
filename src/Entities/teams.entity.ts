import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Players } from './player.entity';

@Entity()
export class Teams {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamId: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  code: string;

  @Column()
  city: string;

  @Column()
  logo: string;

  @Column()
  allStar: boolean;

  @Column()
  nbaFranchise: boolean;

  @Column()
  leagues: {
    standard: {
      conference: string;
      division: string;
    };
  };
  @OneToMany(() => Players, (players) => players.team)
  @JoinColumn()
  players: Players[];
}
