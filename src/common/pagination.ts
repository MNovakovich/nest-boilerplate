interface IOptions {
  limit?: number;
}
interface IProps {
  model: any;
  options?: IOptions;
  query?: any;
}

export interface IPaginationResponse<T> {
  limit: number;
  page: number;
  totalPage: number;
  count: number;
  rows: T[];
}
export class PaginateDecorator<T> {
  private model: any;
  public options: IOptions;
  private query: any;
  constructor({ model, options = { limit: 3 }, query }: IProps) {
    this.model = model;
    this.options = options;
    this.query = query;
  }

  public async getResult(currentPage) {
    const limit = this.options.limit ?? 3;
    const page = currentPage || 1;
    const offset = (page - 1) * limit;
    console.log({ limit, page, offset, model: this.model });
    let output: IPaginationResponse<T> = await this.model.findAndCountAll({
      offset: offset,
      limit: limit,
      ...this.query,
    });
    output = {
      ...this.options,
      totalPage: output.count,
      ...output,
    };

    return output;
  }
}
