import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateValuetypeDto } from './dto/create-valuetype.dto';
import { UpdateValuetypeDto } from './dto/update-valuetype.dto';
import { Valuetype } from './valuetype.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class ValuetypeService {
  //constructor(@InjectModel(Valuetype) private valuetypeRepository: typeof Valuetype) {}
  constructor(
    @Inject('VALUETYPE_REPOSITORY')
    private valuetypeRepository: typeof Valuetype,
  ) {}
  async create(data: CreateValuetypeDto | any) {
    const result = await this.valuetypeRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<Valuetype[]> {
    const res = await paginateFilterUrl.query(
      this.valuetypeRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.valuetypeRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateValuetypeDto): Promise<any> {
    const result = await this.valuetypeRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('valuetype not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.valuetypeRepository.destroy({ where: { id } });
  }
}
