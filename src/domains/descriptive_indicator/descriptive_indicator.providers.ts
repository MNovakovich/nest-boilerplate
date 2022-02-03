import { DescriptiveIndicator } from './descriptive_indicator.entity';
export const descriptive_indicatorProviders = [
  {
    provide: 'DESCRIPTIVE_INDICATOR_REPOSITORY',
    useValue: DescriptiveIndicator,
  },
];