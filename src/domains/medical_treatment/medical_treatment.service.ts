import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateMedicalTreatmentDto } from './dto/create-medical_treatment.dto';
import { UpdateMedicalTreatmentDto } from './dto/update-medical_treatment.dto';
import { MedicalTreatment } from './medical_treatment.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class MedicalTreatmentService {
  //constructor(@InjectModel(MedicalTreatment) private medical_treatmentRepository: typeof MedicalTreatment) {}
  constructor(
    @Inject('MEDICAL_TREATMENT_REPOSITORY')
    private medical_treatmentRepository: typeof MedicalTreatment,
  ) {}
  async create(data: CreateMedicalTreatmentDto | any) {
    const result = await this.medical_treatmentRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<MedicalTreatment[]> {
    const res = await paginateFilterUrl.query(
      this.medical_treatmentRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.medical_treatmentRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateMedicalTreatmentDto): Promise<any> {
    const result = await this.medical_treatmentRepository.findOne({
      where: { id },
    });
    if (!result) {
      return new HttpException(
        'medical_treatment not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.medical_treatmentRepository.destroy({ where: { id } });
  }
}
