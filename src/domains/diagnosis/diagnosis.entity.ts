import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface DiagnosisAttributes {
  id: number;
  idcCode: string;
  description: string;
  shoerName: string;
}

@Table({
  tableName: 'DIAGNOSIS',
  timestamps: false,
  comment: 'A medical diagnosis regardin to IDC register. We expecting t',
})
export class Diagnosis
  extends Model<DiagnosisAttributes, DiagnosisAttributes>
  implements DiagnosisAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'IDC_CODE',
    type: DataType.CHAR(15),
    comment: 'IDC short code for diagnosis, like J00',
  })
  idcCode!: string;

  @Column({
    field: 'DESCRIPTION',
    type: DataType.STRING(255),
    comment: 'IDC description, like "Acute nasopharyngitis [common cold]"',
  })
  description!: string;

  @Column({
    field: 'SHOER_NAME',
    type: DataType.CHAR(10),
    comment: 'Diagnosys short name for displaying as TAG',
  })
  shoerName!: string;
}