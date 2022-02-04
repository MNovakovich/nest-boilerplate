import { OfficeUser } from './office_user.entity';
export const office_userProviders = [
  {
    provide: 'OFFICE_USER_REPOSITORY',
    useValue: OfficeUser,
  },
];
