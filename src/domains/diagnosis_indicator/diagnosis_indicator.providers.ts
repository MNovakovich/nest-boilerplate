import { DiagnosisIndicator } from './diagnosis_indicator.entity';
export const diagnosis_indicatorProviders = [
  {
    provide: 'DIAGNOSIS_INDICATOR_REPOSITORY',
    useValue: DiagnosisIndicator,
  },
];
