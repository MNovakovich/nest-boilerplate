import { Module } from '@nestjs/common';
import { IntervalScoreService } from './interval_score.service';
import { IntervalScoreController } from './interval_score.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { IntervalScore } from './interval_score.entity';
import { interval_scoreProviders } from './interval_score.providers';

@Module({
  imports: [],
  controllers: [IntervalScoreController],
  providers: [IntervalScoreService, ...interval_scoreProviders],
})
export class IntervalScoreModule {}
