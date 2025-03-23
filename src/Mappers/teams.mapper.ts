import { TeamsApiDto } from '../teamsDto/TeamsApiDto';
import { Teams } from '../Entities/teams.entity';

export class TeamsMapper {
  static fromApiRespose(apiData: TeamsApiDto): Partial<Teams> {
    return {
      id: apiData.id,
      name: apiData.name,
      nickName: apiData.nickName,
      code: apiData.code,
      city: apiData.city,
      logo: apiData.logo,
      allStar: apiData.allStar,
      nbaFranchise: apiData.nbaFranchise,
      league: apiData.league,
      conference: apiData.conference,
      division: apiData.division,
    };
  }
}
