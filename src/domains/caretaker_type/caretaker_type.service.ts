import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateCaretakerTypeDto } from './dto/create-caretaker_type.dto';
import { UpdateCaretakerTypeDto } from './dto/update-caretaker_type.dto';
import { CaretakerType } from './caretaker_type.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class CaretakerTypeService {
  //constructor(@InjectModel(CaretakerType) private caretaker_typeRepository: typeof CaretakerType) {}
  constructor(
    @Inject('CARETAKER_TYPE_REPOSITORY')
    private caretaker_typeRepository: typeof CaretakerType,
  ) {}
  async create(data: CreateCaretakerTypeDto | any) {
    const result = await this.caretaker_typeRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<CaretakerType[]> {
    const res = await paginateFilterUrl.query(
      this.caretaker_typeRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.caretaker_typeRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateCaretakerTypeDto): Promise<any> {
    const result = await this.caretaker_typeRepository.findOne({
      where: { id },
    });
    if (!result) {
      return new HttpException(
        'caretaker_type not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.caretaker_typeRepository.destroy({ where: { id } });
  }
}
