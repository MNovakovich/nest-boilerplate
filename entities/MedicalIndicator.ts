import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface MedicalIndicatorAttributes {
  id: number;
  typeId: number;
  name: string;
  description: string;
  shortName: string;
  refreshTime: number;
  unitOfMeasure?: string;
}

@Table({ tableName: 'MEDICAL_INDICATOR', timestamps: false })
export class MedicalIndicator
  extends Model<MedicalIndicatorAttributes, MedicalIndicatorAttributes>
  implements MedicalIndicatorAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'TYPE_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Value Type',
  })
  typeId!: number;

  @Column({
    field: 'NAME',
    type: DataType.STRING(40),
    comment: 'Name (title) of medical indicator',
  })
  name!: string;

  @Column({
    field: 'DESCRIPTION',
    type: DataType.STRING(255),
    comment: 'Longer descriptive text of medical indicator, like "Temperature"',
  })
  description!: string;

  @Column({
    field: 'SHORT_NAME',
    type: DataType.CHAR(10),
    comment:
      'Short descriptive text of medical indicator, like "Temp". Used for small title',
  })
  shortName!: string;

  @Column({
    field: 'REFRESH_TIME',
    type: DataType.INTEGER,
    comment: 'Time (hours) to ask parents for new value of medical indicator',
  })
  refreshTime!: number;

  @Column({
    field: 'UNIT_OF_MEASURE',
    allowNull: true,
    type: DataType.CHAR(6),
    comment: 'Mnemonic for Unit of Measure for medical indicator',
  })
  unitOfMeasure?: string;
}
