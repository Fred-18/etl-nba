import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { GetPlayersDtoForTableRelation } from '../playersDto/GetPlayersDtoForTableRelation';

export class TeamsApiDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  nickname: string;

  @IsString()
  code: string;

  @IsString()
  city: string;

  @IsString()
  logo: string;

  @IsBoolean()
  allStar: boolean;

  @IsBoolean()
  nbaFranchise: boolean;

  @IsString()
  league: string;

  @IsString()
  conference: string;

  @IsString()
  division: string;

  players: GetPlayersDtoForTableRelation;
}
