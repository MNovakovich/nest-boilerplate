import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'roles',
  underscored: true,
  timestamps: false,
})
export class Role extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(562),
    allowNull: false,
  })
  description: string;
}
