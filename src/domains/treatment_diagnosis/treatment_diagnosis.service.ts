import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateTreatmentDiagnosisDto } from './dto/create-treatment_diagnosis.dto';
import { UpdateTreatmentDiagnosisDto } from './dto/update-treatment_diagnosis.dto';
import { TreatmentDiagnosis } from './treatment_diagnosis.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class TreatmentDiagnosisService {
  //constructor(@InjectModel(TreatmentDiagnosis) private treatment_diagnosisRepository: typeof TreatmentDiagnosis) {}
  constructor(
    @Inject('TREATMENT_DIAGNOSIS_REPOSITORY')
    private treatment_diagnosisRepository: typeof TreatmentDiagnosis,
  ) {}
  async create(data: CreateTreatmentDiagnosisDto | any) {
    const result = await this.treatment_diagnosisRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<TreatmentDiagnosis[]> {
    const res = await paginateFilterUrl.query(
      this.treatment_diagnosisRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.treatment_diagnosisRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateTreatmentDiagnosisDto): Promise<any> {
    const result = await this.treatment_diagnosisRepository.findOne({
      where: { id },
    });
    if (!result) {
      return new HttpException(
        'treatment_diagnosis not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.treatment_diagnosisRepository.destroy({ where: { id } });
  }
}
