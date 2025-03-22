import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from '../Entities/player.entity';
import { Teams } from '../Entities/teams.entity';
import { TeamsId } from '../Entities/teamsId.entiy';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'root',
      password: 'root',
      database: 'PostgresSQL',
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
