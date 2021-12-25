import { Role } from './role.model';
import { UserRoles } from './user-role.model';

export const rolesProviders = [
  {
    provide: 'ROLE_REPOSITORY',
    useValue: Role,
  },
  {
    provide: 'USER_ROLES_REPOSITORY',
    useValue: UserRoles,
  },
];
