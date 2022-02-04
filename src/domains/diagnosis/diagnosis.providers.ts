import { Diagnosis } from './diagnosis.entity';
export const diagnosisProviders = [
  {
    provide: 'DIAGNOSIS_REPOSITORY',
    useValue: Diagnosis,
  },
];
