import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeamsId {
  @PrimaryGeneratedColumn()
  id: number;
}
