import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasOne,
} from 'sequelize-typescript';
import { CaretakerType } from '../caretaker_type/caretaker_type.entity';
import { Patient } from '../patient/patient.entity';
import { TakeCare } from '../take_care/take_care.entity';
import { User } from '../user/user.entity';

interface CaretakerAttributes {
  id: number;
  caretakerTypeId?: number;
  address?: string;
  phone: string;
  userId: number;
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
    autoIncrement: true,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @ForeignKey(() => CaretakerType)
  @Column({
    field: 'CARETAKER_TYPE_ID',
    allowNull: false,
    type: DataType.INTEGER,
    comment: 'FK, Surogate key of caretaker type',
  })
  caretakerTypeId?: number;

  @ForeignKey(() => User)
  @Column({
    field: 'USER_ID',
    allowNull: false,
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

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

  @BelongsTo(() => CaretakerType)
  caretakerType: CaretakerType;

  @BelongsToMany(() => Patient, () => TakeCare)
  patients: Patient[];
}
