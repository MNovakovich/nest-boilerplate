import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateDoctorsOfficeDto } from './dto/create-doctors_office.dto';
import { UpdateDoctorsOfficeDto } from './dto/update-doctors_office.dto';
import { DoctorsOffice } from './doctors_office.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class DoctorsOfficeService {
  //constructor(@InjectModel(DoctorsOffice) private doctors_officeRepository: typeof DoctorsOffice) {}
  constructor(@Inject('DOCTORS_OFFICE_REPOSITORY') private doctors_officeRepository: typeof DoctorsOffice) {}
  async create(data: CreateDoctorsOfficeDto | any) {
    const result = await this.doctors_officeRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<DoctorsOffice[]> {
    const res = await paginateFilterUrl.query(this.doctors_officeRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.doctors_officeRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateDoctorsOfficeDto): Promise<any> {
    const result = await this.doctors_officeRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('doctors_office not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.doctors_officeRepository.destroy({ where: { id }});
  }
}