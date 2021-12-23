import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { UserRoles } from './user-role.model';
import sequelize from '@nestjs/sequelize';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';
@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY') private readonly roleRepository: typeof Role, // private readonly userRoleRepository: typeof UserRoles,
    @Inject('USER_ROLES_REPOSITORY')
    private readonly userRoleRepository: typeof UserRoles,
  ) {}

  async getAll() {
    return await this.roleRepository.findAll({});
  }
  async getRoleByName(name: string) {
    return await this.roleRepository.findOne({ where: { name } });
  }

  async getAllRoles(query) {
    const options: any = {};
    options.include = [
      {
        model: Role,
      },
    ];
    return await paginateFilterUrl.query(
      this.userRoleRepository,
      query,
      options,
    );
  }
}
