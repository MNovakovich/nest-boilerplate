import { User } from './domains/user/user.model';
import { Role } from './domains/role/role.model';

import db from './config/database/sequelize';
export const modelsArr = [User, Role];
export const modelsObj = { User, Role };
console.log(db.models, 'bazzaa');
