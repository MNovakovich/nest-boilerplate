import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateTreatmentIndicatorDto } from './dto/create-treatment_indicator.dto';
import { UpdateTreatmentIndicatorDto } from './dto/update-treatment_indicator.dto';
import { TreatmentIndicator } from './treatment_indicator.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class TreatmentIndicatorService {
  //constructor(@InjectModel(TreatmentIndicator) private treatment_indicatorRepository: typeof TreatmentIndicator) {}
  constructor(@Inject('TREATMENT_INDICATOR_REPOSITORY') private treatment_indicatorRepository: typeof TreatmentIndicator) {}
  async create(data: CreateTreatmentIndicatorDto | any) {
    const result = await this.treatment_indicatorRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<TreatmentIndicator[]> {
    const res = await paginateFilterUrl.query(this.treatment_indicatorRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.treatment_indicatorRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateTreatmentIndicatorDto): Promise<any> {
    const result = await this.treatment_indicatorRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('treatment_indicator not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.treatment_indicatorRepository.destroy({ where: { id }});
  }
}