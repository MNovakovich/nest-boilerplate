import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize';
import { Role } from '../role/role.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private roleService: RoleService,
  ) {}

  async findAll(query): Promise<User[]> {
    try {
      // const userNew = await new PaginateDecorator<User>({
      //   model: this.userModel,
      //   options: { limit: Number(query.limit) },
      //   query: { order: [['email', 'ASC']] },
      // });
      // return userNew.getResult(query.page);
      return await this.userModel.findAll({});
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

  // async create(body: CreateUserDto) {
  //   const user = await this.getUserByEmail(body.email);
  //   if (user) {
  //     throw new HttpException('User is alredy exists', HttpStatus.BAD_REQUEST);
  //   }
  //   return await this.userModel.create(body);
  // }
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
    return await user.update(data);
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
    console.log(data);
    const user = await this.userModel.findOne({ where: { id: data.userId } });
    await user.$set('roles', data.roleId);
    return user;
  }
}
