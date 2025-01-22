import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {
  async getPlayers() {
    const response = await axios.get(
      'https://www.balldontlie.io/api/v1/players',
    );
    return response.data;
  }

  async getTeams() {
    const response = await axios.get('https://www.balldontlie.io/api/v1/teams');
    console.log('testgit');
    
    return response.data;
  } 
}
