import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeamsId {
  @PrimaryGeneratedColumn()
  id: number;
}
