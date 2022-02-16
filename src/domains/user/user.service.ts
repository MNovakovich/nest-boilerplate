import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
//import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

//import { UsersRoleService } from '../users_role/users_role.service';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userModel: typeof User, // private roleService: RoleService,
  ) {}

  async findAll(query): Promise<User[]> {
    const res = await paginateFilterUrl.query(this.userModel, query, {});
    if (!res) throw new NotFoundException();
    return res;
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

  async create(dto) {
    // try {
    const user = await this.userModel.create(dto);
    // const role = await this.roleService.getRoleByName('user');
    //await user.$set('roles', [role.id]);
    return user;
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
    try {
      const user = await this.userModel.findOne({
        where: { email },
        include: { all: true },
      });

      return user;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getUserByUsrName(userName: string) {
    try {
      const user = await this.userModel.findOne({
        where: { userName },
        include: { all: true },
      });

      return user;
    } catch (error) {
      console.log(error.message);
    }
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

  async getImagePath() {
    console.log(this.userModel);
    const path = `/images/`;
    return path;
  }
}
