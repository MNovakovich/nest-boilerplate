import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateCaretakerDto } from './dto/create-caretaker.dto';
import { UpdateCaretakerDto } from './dto/update-caretaker.dto';
import { Caretaker } from './caretaker.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class CaretakerService {
  //constructor(@InjectModel(Caretaker) private caretakerRepository: typeof Caretaker) {}
  constructor(@Inject('CARETAKER_REPOSITORY') private caretakerRepository: typeof Caretaker) {}
  async create(data: CreateCaretakerDto | any) {
    const result = await this.caretakerRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<Caretaker[]> {
    const res = await paginateFilterUrl.query(this.caretakerRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.caretakerRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateCaretakerDto): Promise<any> {
    const result = await this.caretakerRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('caretaker not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.caretakerRepository.destroy({ where: { id }});
  }
}