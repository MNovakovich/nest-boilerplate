import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}

  async getAll() {
    return await this.roleModel.findAll({});
  }
  async getRoleByName(name: string) {
    return await this.roleModel.findOne({ where: { name } });
  }
}
