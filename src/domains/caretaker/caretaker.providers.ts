import { Caretaker } from './caretaker.entity';
export const caretakerProviders = [
  {
    provide: 'CARETAKER_REPOSITORY',
    useValue: Caretaker,
  },
];