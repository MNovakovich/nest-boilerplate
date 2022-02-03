import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateDiagnosisIndicatorDto } from './dto/create-diagnosis_indicator.dto';
import { UpdateDiagnosisIndicatorDto } from './dto/update-diagnosis_indicator.dto';
import { DiagnosisIndicator } from './diagnosis_indicator.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class DiagnosisIndicatorService {
  //constructor(@InjectModel(DiagnosisIndicator) private diagnosis_indicatorRepository: typeof DiagnosisIndicator) {}
  constructor(@Inject('DIAGNOSIS_INDICATOR_REPOSITORY') private diagnosis_indicatorRepository: typeof DiagnosisIndicator) {}
  async create(data: CreateDiagnosisIndicatorDto | any) {
    const result = await this.diagnosis_indicatorRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<DiagnosisIndicator[]> {
    const res = await paginateFilterUrl.query(this.diagnosis_indicatorRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.diagnosis_indicatorRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateDiagnosisIndicatorDto): Promise<any> {
    const result = await this.diagnosis_indicatorRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('diagnosis_indicator not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.diagnosis_indicatorRepository.destroy({ where: { id }});
  }
}