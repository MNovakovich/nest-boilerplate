import { Role } from './role.model';

export const rolesProviders = [
  {
    provide: 'ROLE_REPOSITORY',
    useValue: Role,
  },
];
