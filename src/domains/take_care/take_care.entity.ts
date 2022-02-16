import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Caretaker } from '../caretaker/caretaker.entity';
import { Patient } from '../patient/patient.entity';

interface TakeCareAttributes {
  id: number;
  caretakerId: number;
  patientId: number;
  activatedTime: Date;
  deactivatedTime?: Date;
  active: number;
}

@Table({
  tableName: 'TAKE_CARE',
  timestamps: false,

  comment: 'A relation who takeing care about patient.',
})
export class TakeCare
  extends Model<TakeCareAttributes, TakeCareAttributes>
  implements TakeCareAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    comment: 'Surogate key, autoincrement',
  })
  id!: number;

  @ForeignKey(() => Caretaker)
  @Column({
    field: 'CARETAKER_ID',
    type: DataType.INTEGER,
    comment: 'FK reference for person who take care for patient',
    allowNull: false,
  })
  caretakerId: number;

  @ForeignKey(() => Patient)
  @Column({
    field: 'PATIENT_ID',
    type: DataType.INTEGER,
    comment: 'FK reference for person who is a patient of the doctor',
    allowNull: false,
  })
  patientId: number;

  @Column({
    field: 'ACTIVATED_TIME',
    type: DataType.DATE,
    comment: 'Time of Caretaker activation in the application',
  })
  activatedTime!: Date;

  @Column({
    field: 'DEACTIVATED_TIME',
    allowNull: true,
    type: DataType.DATE,
    comment: 'Time of Caretaker de-activation in the application',
  })
  deactivatedTime?: Date;

  @Column({
    field: 'ACTIVE',
    type: DataType.TINYINT,
    comment: 'Indicator is caretaker active in the moment',
  })
  active!: number;
}
