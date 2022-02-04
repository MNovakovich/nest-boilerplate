import {
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaginateDecorator, IPaginationResponse } from 'src/common/pagination';
import { CreateTakecareNoteDto } from './dto/create-takecare_note.dto';
import { UpdateTakecareNoteDto } from './dto/update-takecare_note.dto';
import { TakecareNote } from './takecare_note.entity';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';

@Injectable()
export class TakecareNoteService {
  //constructor(@InjectModel(TakecareNote) private takecare_noteRepository: typeof TakecareNote) {}
  constructor(
    @Inject('TAKECARE_NOTE_REPOSITORY')
    private takecare_noteRepository: typeof TakecareNote,
  ) {}
  async create(data: CreateTakecareNoteDto | any) {
    const result = await this.takecare_noteRepository.create(data);
    return result;
  }

  async findAll(query: any): Promise<TakecareNote[]> {
    const res = await paginateFilterUrl.query(
      this.takecare_noteRepository,
      query,
      {},
    );
    if (!res) throw new NotFoundException();
    return res;
  }

  async findOne(id: number) {
    return await this.takecare_noteRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateTakecareNoteDto): Promise<any> {
    const result = await this.takecare_noteRepository.findOne({
      where: { id },
    });
    if (!result) {
      return new HttpException(
        'takecare_note not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await result.update(data);
  }

  remove(id: number) {
    return this.takecare_noteRepository.destroy({ where: { id } });
  }
}
