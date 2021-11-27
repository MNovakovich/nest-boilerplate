import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  underscored: true,
  paranoid: true,
  deletedAt: 'deletedAt',
})
export class User extends Model {
  // @Column
  // username: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
