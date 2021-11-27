import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
//import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  private readonly users: any[] = [
    { id: 1, name: 'marko' },
    { id: 1, name: 'irina' },
  ];

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({});
  }

  getAll() {
    return this.users;
  }

  async create(body: CreateUserDto) {
    try {
      return await this.userModel.create(body);
    } catch (error) {
      console.log(error.message);
    }
  }
}
