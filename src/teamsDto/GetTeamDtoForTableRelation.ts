import { IsNumber, IsString } from 'class-validator';

export class GetTeamDtoForTableRelation {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
