import { TakeCare } from './take_care.entity';
export const take_careProviders = [
  {
    provide: 'TAKE_CARE_REPOSITORY',
    useValue: TakeCare,
  },
];
