import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface IndicaorValueAttributes {
  id: number;
  treatmentId: number;
  indicatorId: number;
  desciptiveValueId?: number;
  caretakerId?: number;
  numericValue?: string;
  valueScore: string;
  valueTime: Date;
}

@Table({ tableName: 'INDICAOR_VALUE', timestamps: false })
export class IndicaorValue
  extends Model<IndicaorValueAttributes, IndicaorValueAttributes>
  implements IndicaorValueAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'TREATMENT_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Threatment',
  })
  treatmentId!: number;

  @Column({
    field: 'INDICATOR_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Indicator',
  })
  indicatorId!: number;

  @Column({
    field: 'DESCIPTIVE_VALUE_ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment:
      'FK  reference for Descriptive Medical Indicator - optional if indicator has descriptive value (enumeration).',
  })
  desciptiveValueId?: number;

  @Column({
    field: 'CARETAKER_ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'FK reference for person who sent data to doctor',
  })
  caretakerId?: number;

  @Column({
    field: 'NUMERIC_VALUE',
    allowNull: true,
    type: DataType.DECIMAL(10, 2),
    comment: 'Value of numerical medical indicator',
  })
  numericValue?: string;

  @Column({
    field: 'VALUE_SCORE',
    type: DataType.DECIMAL(10, 2),
    comment: 'A score for new value of medical indicator',
  })
  valueScore!: string;

  @Column({
    field: 'VALUE_TIME',
    type: DataType.DATE,
    comment: 'A time of capture',
  })
  valueTime!: Date;
}
