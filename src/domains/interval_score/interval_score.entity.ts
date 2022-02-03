import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface IntervalScoreAttributes {
  id: number;
  lowValue: string;
  highValue: string;
  intervalScore: number;
}

@Table({ tableName: 'INTERVAL_SCORE', timestamps: false })
export class IntervalScore
  extends Model<IntervalScoreAttributes, IntervalScoreAttributes>
  implements IntervalScoreAttributes
{
  @Column({
    field: 'ID',
    primaryKey: true,
    type: DataType.INTEGER,
    comment: 'Surogate key - autoincerment number',
  })
  id!: number;

  @Column({
    field: 'LOW_VALUE',
    type: DataType.DECIMAL(10, 2),
    comment: 'Lower limit value for numerical indicator - inclided',
  })
  lowValue!: string;

  @Column({
    field: 'HIGH_VALUE',
    type: DataType.DECIMAL(10, 2),
    comment:
      'Higjer limit value for numerical indicator - not inclided in interval',
  })
  highValue!: string;

  @Column({
    field: 'INTERVAL_SCORE',
    type: DataType.INTEGER,
    comment:
      'Sscore for that interval with linear scale from low to high value. Low have 0 score and high have full score',
  })
  intervalScore!: number;
}
