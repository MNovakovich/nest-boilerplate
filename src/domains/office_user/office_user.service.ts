import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateOfficeUserDto } from './dto/create-office_user.dto';
import { UpdateOfficeUserDto } from './dto/update-office_user.dto';
import { OfficeUser } from './office_user.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class OfficeUserService {
  //constructor(@InjectModel(OfficeUser) private office_userRepository: typeof OfficeUser) {}
  constructor(
    @Inject('OFFICE_USER_REPOSITORY')
    private office_userRepository: typeof OfficeUser,
  ) {}
  async create(data: CreateOfficeUserDto | any) {
    const result = await this.office_userRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<OfficeUser[]> {
    const res = await paginateFilterUrl.query(
      this.office_userRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.office_userRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateOfficeUserDto): Promise<any> {
    const result = await this.office_userRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException(
        'office_user not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.office_userRepository.destroy({ where: { id } });
  }
}
