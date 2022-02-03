import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface TreatmentIndicatorAttributes {
  id: number;
  treatmentD: number;
  indicatorId: number;
  refreshTime?: number;
}

@Table({ tableName: 'TREATMENT_INDICATOR', timestamps: false })
export class TreatmentIndicator
  extends Model<TreatmentIndicatorAttributes, TreatmentIndicatorAttributes>
  implements TreatmentIndicatorAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'TREATMENT_D',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Threatment',
  })
  treatmentD!: number;

  @Column({
    field: 'INDICATOR_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Indicator',
  })
  indicatorId!: number;

  @Column({
    field: 'REFRESH_TIME',
    allowNull: true,
    type: DataType.INTEGER,
    comment:
      'Personal refresh time for indicator for patient - can be different from default refresh time defined in medical indicator',
  })
  refreshTime?: number;
}
