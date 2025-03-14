import { IsNumber, IsString } from 'class-validator';

export class GetPlayersDtoForTableRelation {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
