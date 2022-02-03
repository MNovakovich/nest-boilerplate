import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface RolesAttributes {
  id?: number;
  name: string;
}

@Table({ tableName: 'roles', timestamps: false })
export class Roles
  extends Model<RolesAttributes, RolesAttributes>
  implements RolesAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id?: number;

  @Column({ type: DataType.STRING(255) })
  name!: string;
}
