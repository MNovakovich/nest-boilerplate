import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'CARETAKER',
  timestamps: false,
  comment: 'Can be one of parents of the patient (95% of cases), but can',
})
export class Caretaker extends Model {
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  Id!: number;
  @Column({
    field: 'CARETAKER_TYPE_ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'FK, Surogate key of caretaker type',
  })
  CaretakerTypeId?: number;
  @Column({
    field: 'EMAIL',
    allowNull: true,
    type: DataType.STRING(60),
    comment: 'Caretaker email address, also as user name for caretaker',
  })
  Email?: string;
  @Column({
    field: 'PASSWORD',
    allowNull: true,
    type: DataType.STRING(40),
    comment: 'Caretarker access password',
  })
  Password?: string;
  @Column({
    field: 'FIRST_NAME',
    type: DataType.STRING(40),
    comment: 'First Name of the parent',
  })
  FirstName!: string;
  @Column({
    field: 'LAST_NAME',
    type: DataType.STRING(40),
    comment: 'Last Name of the parent',
  })
  LastName!: string;
  @Column({
    field: 'ADDRESS',
    allowNull: true,
    type: DataType.STRING(120),
    comment: 'Residence address',
  })
  Address?: string;
  @Column({
    field: 'PHONE',
    type: DataType.CHAR(20),
    comment: 'Caretaker phone number',
  })
  Phone!: string;
}
