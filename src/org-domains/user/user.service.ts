import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../role/role.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) {}

  async findAll(query): Promise<IPaginationResponse<User>> {
    try {
      const userNew = await new PaginateDecorator<User>({
        model: this.userModel,
        options: { limit: Number(query.limit) },
        query: { order: [['email', 'ASC']] },
      });
      return userNew.getResult(query.page);
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

`

npx stg -D mysql -h localhost -p 3306 -d node_bp -u root -x root --indices --dialect-options-file path/to/dialectOptions.json --case camel --out-dir models --clean 


`;
