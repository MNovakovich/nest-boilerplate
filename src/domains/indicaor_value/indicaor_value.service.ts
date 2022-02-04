import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateIndicaorValueDto } from './dto/create-indicaor_value.dto';
import { UpdateIndicaorValueDto } from './dto/update-indicaor_value.dto';
import { IndicaorValue } from './indicaor_value.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class IndicaorValueService {
  //constructor(@InjectModel(IndicaorValue) private indicaor_valueRepository: typeof IndicaorValue) {}
  constructor(
    @Inject('INDICAOR_VALUE_REPOSITORY')
    private indicaor_valueRepository: typeof IndicaorValue,
  ) {}
  async create(data: CreateIndicaorValueDto | any) {
    const result = await this.indicaor_valueRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<IndicaorValue[]> {
    const res = await paginateFilterUrl.query(
      this.indicaor_valueRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.indicaor_valueRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateIndicaorValueDto): Promise<any> {
    const result = await this.indicaor_valueRepository.findOne({
      where: { id },
    });
    if (!result) {
      return new HttpException(
        'indicaor_value not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.indicaor_valueRepository.destroy({ where: { id } });
  }
}
