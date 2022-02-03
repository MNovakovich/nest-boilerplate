import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface MedicalTreatmentAttributes {
  id: number;
  patientId: number;
  doctorId: number;
  started: Date;
  finished?: Date;
  actualScore: string;
}

@Table({ tableName: 'MEDICAL_TREATMENT', timestamps: false })
export class MedicalTreatment
  extends Model<MedicalTreatmentAttributes, MedicalTreatmentAttributes>
  implements MedicalTreatmentAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'PATIENT_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Patient',
  })
  patientId!: number;

  @Column({
    field: 'DOCTOR_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Doctor',
  })
  doctorId!: number;

  @Column({
    field: 'STARTED',
    type: DataType.DATE,
    comment: 'Time of first visit to doctors with new symptoms',
  })
  started!: Date;

  @Column({
    field: 'FINISHED',
    allowNull: true,
    type: DataType.DATE,
    comment: 'Time of last visit when threatment was closed',
  })
  finished?: Date;

  @Column({
    field: 'ACTUAL_SCORE',
    type: DataType.DECIMAL(6, 2),
    comment: 'Actuall total score of patient health state',
  })
  actualScore!: string;
}
