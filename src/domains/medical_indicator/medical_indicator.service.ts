import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateMedicalIndicatorDto } from './dto/create-medical_indicator.dto';
import { UpdateMedicalIndicatorDto } from './dto/update-medical_indicator.dto';
import { MedicalIndicator } from './medical_indicator.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class MedicalIndicatorService {
  //constructor(@InjectModel(MedicalIndicator) private medical_indicatorRepository: typeof MedicalIndicator) {}
  constructor(@Inject('MEDICAL_INDICATOR_REPOSITORY') private medical_indicatorRepository: typeof MedicalIndicator) {}
  async create(data: CreateMedicalIndicatorDto | any) {
    const result = await this.medical_indicatorRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<MedicalIndicator[]> {
    const res = await paginateFilterUrl.query(this.medical_indicatorRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.medical_indicatorRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateMedicalIndicatorDto): Promise<any> {
    const result = await this.medical_indicatorRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('medical_indicator not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.medical_indicatorRepository.destroy({ where: { id }});
  }
}