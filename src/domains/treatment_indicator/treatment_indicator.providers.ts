import { TreatmentIndicator } from './treatment_indicator.entity';
export const treatment_indicatorProviders = [
  {
    provide: 'TREATMENT_INDICATOR_REPOSITORY',
    useValue: TreatmentIndicator,
  },
];
