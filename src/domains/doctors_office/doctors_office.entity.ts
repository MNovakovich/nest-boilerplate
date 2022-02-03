import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface DoctorsOfficeAttributes {
  id: number;
  name: string;
  address?: string;
  phone?: string;
}

@Table({ tableName: 'DOCTORS_OFFICE', timestamps: false })
export class DoctorsOffice
  extends Model<DoctorsOfficeAttributes, DoctorsOfficeAttributes>
  implements DoctorsOfficeAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'NAME',
    type: DataType.STRING(40),
    comment: 'Name of the doctors office, usually "Dr. Nikolic"',
  })
  name!: string;

  @Column({
    field: 'ADDRESS',
    allowNull: true,
    type: DataType.STRING(120),
    comment: 'Doctors Office address',
  })
  address?: string;

  @Column({
    field: 'PHONE',
    allowNull: true,
    type: DataType.CHAR(20),
    comment: 'Phone in the doctors office',
  })
  phone?: string;
}
