import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Teams } from "./teams.entity";

@Entity()
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: number;

  @Column({ type: String })
  birth_date: string;

  @Column()
  birth_country: string;

  @Column({ type: "float" })
  height_meters: number;

  @Column({ type: "float" })
  weight_kilograms: number;
  @Column()
  feet: number;
  @Column()
  pounds: number;
  @Column()
  college: string;

  @Column()
  affiliation: string;
  @Column()
  jersey: number;
  @Column()
  active: boolean;
  @Column()
  pos: string;
  @Column()
  league: string;

  @OneToOne(() => Teams)
  @JoinColumn()
  team: Teams;
}
