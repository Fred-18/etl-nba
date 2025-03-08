import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class PlayerDto {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  birth_date: string;

  @IsString()
  birth_country: string;

  @IsOptional()
  @IsNumber()
  height_meters?: number;

  @IsOptional()
  @IsNumber()
  weight_kilograms?: number;

  @IsNumber()
  feet: number;

  @IsNumber()
  pounds: number;

  @IsString()
  college: string;

  @IsString()
  affiliation: string;

  @IsString()
  jersey: number;

  @IsBoolean()
  active: boolean;

  @IsString()
  pos: string;

  @IsString()
  league: string;
}
