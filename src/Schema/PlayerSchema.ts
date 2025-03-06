import { EntitySchema } from "typeorm";
import { Players } from "../Entities/player.entity";
import isEnvironmentTornDown = jest.isEnvironmentTornDown;

export const PlayerSchema = EntitySchema<Players>({
  name: "Players",
  target: Players,
  Columns {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    birth: {
      date: String,
      country: String
    },
    height: {
      feet:number,

    }
  })
//todo player schema wip†