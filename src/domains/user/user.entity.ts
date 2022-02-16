import {
  Model,
  Table,
  Column,
  DataType,
  HasOne,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Caretaker } from '../caretaker/caretaker.entity';
import { DoctorsOffice } from '../doctors_office/doctors_office.entity';

interface OfficeUserAttributes {
  id: number;
  doctorsOfficeId: number;
  userRoleId?: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
}

@Table({ tableName: 'OFFICE_USER', timestamps: false })
export class User
  extends Model<OfficeUserAttributes, OfficeUserAttributes>
  implements OfficeUserAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;
  @ForeignKey(() => DoctorsOffice)
  @Column({
    field: 'DOCTORS_OFFICE_ID',
    type: DataType.INTEGER,
    comment: 'FK  reference for Doctors Office',
  })
  doctorsOfficeId!: number;

  @Column({
    field: 'USER_ROLE_ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'FK reference for User Role',
  })
  userRoleId?: number;

  @Column({
    field: 'USER_NAME',
    type: DataType.CHAR(30),
    comment:
      'User name for login in applicaion. Must be protected and user authenicated',
  })
  userName!: string;

  @Column({
    field: 'PASSWORD',
    type: DataType.STRING(256),
    comment: "Users' password / hash value",
  })
  password!: string;

  @Column({
    field: 'FIRST_NAME',
    type: DataType.STRING(40),
    comment: 'First name of the user',
  })
  firstName!: string;

  @Column({
    field: 'LAST_NAME',
    type: DataType.STRING(40),
    comment: 'Last name of the user',
  })
  lastName!: string;

  @Column({
    field: 'PHONE',
    allowNull: true,
    type: DataType.CHAR(20),
    comment:
      'Official (business) phone number of the user - usable for parent communication ',
  })
  phone?: string;

  @Column({
    field: 'EMAIL',
    allowNull: true,
    type: DataType.STRING(60),
    comment:
      'Official (business) email of the user - usable for parent communication ',
  })
  email?: string;

  @HasMany(() => Caretaker)
  caretaker: Caretaker;
}
