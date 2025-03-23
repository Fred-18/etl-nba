import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Players } from '../Entities/player.entity';
import { Repository } from 'typeorm';
import * as process from 'node:process';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { async } from "rxjs";

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Players)
    private readonly playerRepository: Repository<Players>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  const apiKey ='x-rapidapi-key'
  const apiHost ='x-rapidapi-host'

  const option={
    method:'GET',
    url:API_URL,
    params?:{},
    headers:{
      apiKey:API_KEY,
      apiHost:API_HOST
    }
      // Voir les notes sur NOtion 
  }

  }
  async fetchData(): Promise<T> {

  }
}
