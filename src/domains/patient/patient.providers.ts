import { Patient } from './patient.entity';
export const patientProviders = [
  {
    provide: 'PATIENT_REPOSITORY',
    useValue: Patient,
  },
];
