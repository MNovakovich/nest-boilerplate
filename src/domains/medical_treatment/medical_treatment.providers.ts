import { MedicalTreatment } from './medical_treatment.entity';
export const medical_treatmentProviders = [
  {
    provide: 'MEDICAL_TREATMENT_REPOSITORY',
    useValue: MedicalTreatment,
  },
];