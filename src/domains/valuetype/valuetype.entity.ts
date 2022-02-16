import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface ValuetypeAttributes {
  id: number;
  name: string;
}

@Table({
  tableName: 'VALUETYPE',
  timestamps: false,
  comment: 'Value type of medical indictor.\r\nThe indicator can be n',
})
export class Valuetype
  extends Model<ValuetypeAttributes, ValuetypeAttributes>
  implements ValuetypeAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'NAME',
    type: DataType.STRING(40),
    comment: 'Name of indicator value: Numeric or Enumeration (descriptive)',
  })
  name!: string;
}