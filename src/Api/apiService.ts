import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Players } from '../Entities/player.entity';
import { Repository } from 'typeorm';
import * as process from 'node:process';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Players)
    private readonly playerRepository: Repository<Players>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async fetchPlayerAndStore(
    teamsId: number,
    seasons: string,
  ): Promise<Players> {
    try {
      const apiKey = process.env.API_KEY;
      const apiHost = process.env.API_HOST;
      const playersUrl = process.env.URL_PLAYER;

      if (!apiKey || !apiHost || !playersUrl) {
        throw new Error('API_KEY or API_HOST or URL_PLAYERS not found in .env');
      }
      const response = await axios.get(playersUrl, {
        params: {
          teamsId: teamsId,
          seasons: seasons,
        },
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiHost,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

//todo je viens d'ajouter le cache manager//
