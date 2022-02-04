import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './patient.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class PatientService {
  //constructor(@InjectModel(Patient) private patientRepository: typeof Patient) {}
  constructor(
    @Inject('PATIENT_REPOSITORY') private patientRepository: typeof Patient,
  ) {}
  async create(data: CreatePatientDto | any) {
    const result = await this.patientRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<Patient[]> {
    const res = await paginateFilterUrl.query(
      this.patientRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.patientRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdatePatientDto): Promise<any> {
    const result = await this.patientRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('patient not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.patientRepository.destroy({ where: { id } });
  }
}
