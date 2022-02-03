import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface TagsAttributes {
  id?: number;
  name: string;
}

@Table({ tableName: 'tags', timestamps: false })
export class Tags
  extends Model<TagsAttributes, TagsAttributes>
  implements TagsAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id?: number;

  @Column({ type: DataType.STRING(255) })
  name!: string;
}
