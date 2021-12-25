import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

import { RoleService } from '../role/role.service';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userModel: typeof User,
    private roleService: RoleService, // private roleService: RoleService,
  ) {}

  async findAll(query): Promise<User[]> {
    try {
      const res = await paginateFilterUrl.query(this.userModel, query, {});
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
  async getById(id: number): Promise<User> {
    try {
      const user = await this.userModel.findOne({
        where: { id },
        include: { all: true },
      });
      return user;
    } catch (error) {
      console.log(error.message);
    }
  }

  async create(dto: CreateUserDto) {
    try {
      const user = await this.userModel.create(dto);
      const role = await this.roleService.getRoleByName('user');
      await user.$set('roles', [role.id]);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.userModel.findOne({ where: { id: id } });
    if (!user)
      return new HttpException('user not exist!', HttpStatus.BAD_REQUEST);
    await user.update(data);
    await user.save();
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async delete(id: number) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new HttpException(
        'The user with this id is not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.userModel.destroy({ where: { id } });
  }

  async changeRole(data) {
    const user = await this.userModel.findOne({ where: { id: data.userId } });
    await user.$set('roles', data.roleId);
    return user;
  }
  async getImagePath() {
    console.log(this.userModel);
    const path = `/images/`;
    return path;
  }
}
