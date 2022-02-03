import { IndicaorValue } from './indicaor_value.entity';
export const indicaor_valueProviders = [
  {
    provide: 'INDICAOR_VALUE_REPOSITORY',
    useValue: IndicaorValue,
  },
];