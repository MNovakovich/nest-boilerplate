import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface TreatmentDiagnosisAttributes {
  id: number;
  diagnosisId: number;
  treatmentId: number;
  imporance?: number;
}

@Table({
  tableName: 'TREATMENT_DIAGNOSIS',
  timestamps: false,
  comment: 'A patient diagnose. One patient can have more than one diagn',
})
export class TreatmentDiagnosis
  extends Model<TreatmentDiagnosisAttributes, TreatmentDiagnosisAttributes>
  implements TreatmentDiagnosisAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'DIAGNOSIS_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Diagnosys',
  })
  diagnosisId!: number;

  @Column({
    field: 'TREATMENT_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Medical Threatment',
  })
  treatmentId!: number;

  @Column({
    field: 'IMPORANCE',
    allowNull: true,
    type: DataType.INTEGER,
    comment:
      'Importance of individual diagnosis if patient has more than one diagnosis, like:1, 2, 3, ...',
  })
  imporance?: number;
}
