import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateDescriptiveIndicatorDto } from './dto/create-descriptive_indicator.dto';
import { UpdateDescriptiveIndicatorDto } from './dto/update-descriptive_indicator.dto';
import { DescriptiveIndicator } from './descriptive_indicator.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class DescriptiveIndicatorService {
  //constructor(@InjectModel(DescriptiveIndicator) private descriptive_indicatorRepository: typeof DescriptiveIndicator) {}
  constructor(
    @Inject('DESCRIPTIVE_INDICATOR_REPOSITORY')
    private descriptive_indicatorRepository: typeof DescriptiveIndicator,
  ) {}
  async create(data: CreateDescriptiveIndicatorDto | any) {
    const result = await this.descriptive_indicatorRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<DescriptiveIndicator[]> {
    const res = await paginateFilterUrl.query(
      this.descriptive_indicatorRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.descriptive_indicatorRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, data: UpdateDescriptiveIndicatorDto): Promise<any> {
    const result = await this.descriptive_indicatorRepository.findOne({
      where: { id },
    });
    if (!result) {
      return new HttpException(
        'descriptive_indicator not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.descriptive_indicatorRepository.destroy({ where: { id } });
  }
}
