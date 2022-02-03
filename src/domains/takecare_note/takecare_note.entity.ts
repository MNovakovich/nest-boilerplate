import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface TakecareNoteAttributes {
  id: number;
  treatmentId?: number;
  note: string;
  noteTime: Date;
}

@Table({ tableName: 'TAKECARE_NOTE', timestamps: false })
export class TakecareNote
  extends Model<TakecareNoteAttributes, TakecareNoteAttributes>
  implements TakecareNoteAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surrogate key, autoincrement',
  })
  id!: number;

  @Column({
    field: 'TREATMENT_ID',
    allowNull: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  treatmentId?: number;

  @Column({
    field: 'NOTE',
    type: DataType.STRING,
    comment:
      'Important note writen by doctors for parents to apply special care to patient.',
  })
  note!: string;

  @Column({ field: 'NOTE_TIME', type: DataType.DATE })
  noteTime!: Date;
}
