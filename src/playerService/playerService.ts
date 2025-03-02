import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Players } from '../Entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Players)
    private playersRepository: Repository<Players>,
  ) {}

  findAll(): Promise<Players[]> {
    return this.playersRepository.find();
  }

  findOne(id: number): Promise<Players | null> {
    return this.playersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.playersRepository.delete(id);
  }
}
