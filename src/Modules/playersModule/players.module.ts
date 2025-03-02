import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from '../../Entities/player.entity';
import { Module } from '@nestjs/common';
import { PlayersService } from '../../playerService/playerService';
import { PlayersController } from '../../playerController/playerController';

@Module({
  imports: [TypeOrmModule.forFeature([Players])],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [PlayersService],
})
export class PlayersModule {}
