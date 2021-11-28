import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<any> {
    try {
      const users = await this.userModel.findAndCountAll({});
      console.log(users);
      return users;
    } catch (error) {
      console.log(error.message);
    }
  }

  async create(body: CreateUserDto) {
    const user = await this.getUserByEmail(body.email);
    if (user) {
      throw new HttpException('User is alredy exists', HttpStatus.BAD_REQUEST);
    }
    return await this.userModel.create(body);
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
  async update(id: number, data: UpdateUserDto) {
    const user = await this.userModel.findOne({ where: { id: id } });
    if (!user)
      return new HttpException('user not exist!', HttpStatus.BAD_REQUEST);
    return await user.update(data);
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({ where: { email } });
    return user;
  }
}
