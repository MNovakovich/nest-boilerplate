import { User } from './domains/user/user.model';
import { Role } from './domains/role/role.model';
import { UserRoles } from './domains/role/user-role.model';
import db from './config/database/sequelize';
export const modelsArr = [User, Role, UserRoles];
export const modelsObj = { User, Role, UserRoles };
console.log(db.models, 'bazzaa');
