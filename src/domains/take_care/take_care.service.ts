import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateTakeCareDto } from './dto/create-take_care.dto';
import { UpdateTakeCareDto } from './dto/update-take_care.dto';
import { TakeCare } from './take_care.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class TakeCareService {
  //constructor(@InjectModel(TakeCare) private take_careRepository: typeof TakeCare) {}
  constructor(
    @Inject('TAKE_CARE_REPOSITORY')
    private take_careRepository: typeof TakeCare,
  ) {}
  async create(data: CreateTakeCareDto | any) {
    const result = await this.take_careRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<TakeCare[]> {
    const res = await paginateFilterUrl.query(
      this.take_careRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.take_careRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateTakeCareDto): Promise<any> {
    const result = await this.take_careRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('take_care not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.take_careRepository.destroy({ where: { id } });
  }
}
