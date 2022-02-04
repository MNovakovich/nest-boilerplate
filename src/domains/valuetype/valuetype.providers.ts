import { Valuetype } from './valuetype.entity';
export const valuetypeProviders = [
  {
    provide: 'VALUETYPE_REPOSITORY',
    useValue: Valuetype,
  },
];
