import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface DiagnosisIndicatorAttributes {
  id: number;
  indicatorId: number;
  diagnosysId: number;
}

@Table({ tableName: 'DIAGNOSIS_INDICATOR', timestamps: false })
export class DiagnosisIndicator
  extends Model<DiagnosisIndicatorAttributes, DiagnosisIndicatorAttributes>
  implements DiagnosisIndicatorAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'INDICATOR_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Indicator',
  })
  indicatorId!: number;

  @Column({
    field: 'DIAGNOSYS_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for medical Diagnosys',
  })
  diagnosysId!: number;
}
