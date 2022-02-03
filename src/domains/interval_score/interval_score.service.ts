import { HttpException, HttpStatus, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateIntervalScoreDto } from './dto/create-interval_score.dto';
import { UpdateIntervalScoreDto } from './dto/update-interval_score.dto';
import { IntervalScore } from './interval_score.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class IntervalScoreService {
  //constructor(@InjectModel(IntervalScore) private interval_scoreRepository: typeof IntervalScore) {}
  constructor(@Inject('INTERVAL_SCORE_REPOSITORY') private interval_scoreRepository: typeof IntervalScore) {}
  async create(data: CreateIntervalScoreDto | any) {
    const result = await this.interval_scoreRepository.create(data);
    return result;
  }

  async findAll(query:any): Promise<IntervalScore[]> {
    const res = await paginateFilterUrl.query(this.interval_scoreRepository, query, {});
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.interval_scoreRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateIntervalScoreDto): Promise<any> {
    const result = await this.interval_scoreRepository.findOne({ where: { id } });
    if (!result) {
      return new HttpException('interval_score not exist!', HttpStatus.BAD_REQUEST);
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.interval_scoreRepository.destroy({ where: { id }});
  }
}