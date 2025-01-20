import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

