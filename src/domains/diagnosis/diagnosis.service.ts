import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { Diagnosis } from './diagnosis.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class DiagnosisService {
  //constructor(@InjectModel(Diagnosis) private diagnosisRepository: typeof Diagnosis) {}
  constructor(@Inject('DIAGNOSIS_REPOSITORY') private diagnosisRepository: typeof Diagnosis) {}
  async create(data: CreateDiagnosisDto | any) {
    const result = await this.diagnosisRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<Diagnosis[]> {
    const res = await paginateFilterUrl.query(this.diagnosisRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.diagnosisRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateDiagnosisDto): Promise<any> {
    const result = await this.diagnosisRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('diagnosis not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.diagnosisRepository.destroy({ where: { id }});
  }
}