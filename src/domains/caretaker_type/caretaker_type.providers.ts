import { CaretakerType } from './caretaker_type.entity';
export const caretaker_typeProviders = [
  {
    provide: 'CARETAKER_TYPE_REPOSITORY',
    useValue: CaretakerType,
  },
];