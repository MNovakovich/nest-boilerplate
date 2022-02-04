import { MedicalIndicator } from './medical_indicator.entity';
export const medical_indicatorProviders = [
  {
    provide: 'MEDICAL_INDICATOR_REPOSITORY',
    useValue: MedicalIndicator,
  },
];
