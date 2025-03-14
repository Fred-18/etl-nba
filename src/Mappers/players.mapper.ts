import { PlayerApiDto } from '../playersDto/PlayerApiDto';
import { Players } from '../Entities/player.entity';

export class PlayersMapper {
  static fromApiResponse(apiData: PlayerApiDto): Partial<Players> {
    return {
      id: apiData.id,
      firstName: apiData.firstName,
      lastName: apiData.lastName,
      birth_date: apiData.birth_date,
      birth_country: apiData.birth_country,
      height_meters: apiData.height_meters,
      weight_kilograms: apiData.weight_kilograms,
      feet: apiData.feet,
      pounds: apiData.pounds,
      college: apiData.college,
      affiliation: apiData.affiliation,
      jersey: apiData.jersey,
      active: apiData.active,
      pos: apiData.pos,
      league: apiData.league,
    };
  }
}
