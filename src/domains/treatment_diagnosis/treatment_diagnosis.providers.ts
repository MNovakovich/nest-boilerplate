import { TreatmentDiagnosis } from './treatment_diagnosis.entity';
export const treatment_diagnosisProviders = [
  {
    provide: 'TREATMENT_DIAGNOSIS_REPOSITORY',
    useValue: TreatmentDiagnosis,
  },
];