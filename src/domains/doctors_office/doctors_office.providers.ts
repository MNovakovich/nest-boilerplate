import { DoctorsOffice } from './doctors_office.entity';
export const doctors_officeProviders = [
  {
    provide: 'DOCTORS_OFFICE_REPOSITORY',
    useValue: DoctorsOffice,
  },
];
