import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';

@Injectable()
export class BaseService<T> {
  public baseModel: T | any;
  constructor(baseModel: any) {
    this.baseModel = baseModel;
  }

  async findAll(query): Promise<IPaginationResponse<T>> {
    try {
      const userNew = await new PaginateDecorator<T>({
        model: this.baseModel,
        options: { limit: Number(query.limit) },
        query: { order: [['email', 'ASC']] },
      });
      return userNew.getResult(query.page);
    } catch (error) {
      console.log(error.message);
    }
  }

  async create(body: any) {
    return await this.baseModel.create(body);
  }

  async delete(id: number) {
    const user = await this.baseModel.findOne({ where: { id } });
    if (!user) {
      throw new HttpException(
        'The user with this id is not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.baseModel.destroy({ where: { id } });
  }
  async update(id: number, data: any) {
    const user = await this.baseModel.findOne({ where: { id: id } });
    if (!user)
      return new HttpException('user not exist!', HttpStatus.BAD_REQUEST);
    return await user.update(data);
  }
}
