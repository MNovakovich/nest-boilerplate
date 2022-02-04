import { UsersRole } from './users_role.entity';
export const users_roleProviders = [
  {
    provide: 'USERS_ROLE_REPOSITORY',
    useValue: UsersRole,
  },
];
