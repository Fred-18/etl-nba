import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from '../Entities/player.entity';
import { Teams } from '../Entities/teams.entity';
import { TeamsId } from '../Entities/teamsId.entiy';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Players, Teams, TeamsId],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Players, Teams, TeamsId]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
