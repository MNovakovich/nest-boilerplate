import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface CaretakerAttributes {
  id: number;
  caretakerTypeId?: number;
  email?: string;
  password?: string;
  firstName: string;
  lastName: string;
  address?: string;
  phone: string;
}

@Table({
  tableName: 'CARETAKER',
  timestamps: false,
  comment: 'Can be one of parents of the patient (95% of cases), but can',
})
export class Caretaker
  extends Model<CaretakerAttributes, CaretakerAttributes>
  implements CaretakerAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'CARETAKER_TYPE_ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'FK, Surogate key of caretaker type',
  })
  caretakerTypeId?: number;

  @Column({
    field: 'EMAIL',
    allowNull: true,
    type: DataType.STRING(60),
    comment: 'Caretaker email address, also as user name for caretaker',
  })
  email?: string;

  @Column({
    field: 'PASSWORD',
    allowNull: true,
    type: DataType.STRING(40),
    comment: 'Caretarker access password',
  })
  password?: string;

  @Column({
    field: 'FIRST_NAME',
    type: DataType.STRING(40),
    comment: 'First Name of the parent',
  })
  firstName!: string;

  @Column({
    field: 'LAST_NAME',
    type: DataType.STRING(40),
    comment: 'Last Name of the parent',
  })
  lastName!: string;

  @Column({
    field: 'ADDRESS',
    allowNull: true,
    type: DataType.STRING(120),
    comment: 'Residence address',
  })
  address?: string;

  @Column({
    field: 'PHONE',
    type: DataType.CHAR(20),
    comment: 'Caretaker phone number',
  })
  phone!: string;
}
