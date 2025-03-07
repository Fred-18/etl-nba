import { EntitySchema } from 'typeorm';
import { Players } from '../Entities/player.entity';



//todo déclarer les bon type pour construire le shecma penser a l'extraire ensuite

export const PlayerSchema = new EntitySchema<Players>({
  name: 'Players',
  target: Players,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    birth:{
      date: String,
      country: String,
    },
    },
    height: {
      feet: number,
      inches: number,
      meters: number,
    },
    weight: {
      pounds: number,
      kilograms: number,
    },
  },
});
//todo player schema wip†
