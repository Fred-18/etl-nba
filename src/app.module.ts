import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './Entities/player.entity';
import { Teams } from './Entities/teams.entity';
import { TeamsId } from './Entities/teamsId.entiy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Player, Teams, TeamsId],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Player, Teams, TeamsId]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
