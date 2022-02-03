import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateUsersRoleDto } from './dto/create-users_role.dto';
import { UpdateUsersRoleDto } from './dto/update-users_role.dto';
import { UsersRole } from './users_role.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class UsersRoleService {
  //constructor(@InjectModel(UsersRole) private users_roleRepository: typeof UsersRole) {}
  constructor(@Inject('USERS_ROLE_REPOSITORY') private users_roleRepository: typeof UsersRole) {}
  async create(data: CreateUsersRoleDto | any) {
    const result = await this.users_roleRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<UsersRole[]> {
    const res = await paginateFilterUrl.query(this.users_roleRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.users_roleRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateUsersRoleDto): Promise<any> {
    const result = await this.users_roleRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('users_role not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.users_roleRepository.destroy({ where: { id }});
  }
}