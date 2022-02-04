import { IntervalScore } from './interval_score.entity';
export const interval_scoreProviders = [
  {
    provide: 'INTERVAL_SCORE_REPOSITORY',
    useValue: IntervalScore,
  },
];
