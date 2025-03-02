import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersController {
  constructor() {}

  async getPlayers() {
    return 'Players';
  }

  async getTeams() {
    return 'Teams';
  }
}
//todo: add the rest of the controller wip
