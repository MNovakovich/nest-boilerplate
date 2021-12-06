import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Role } from './role.model';
interface UserRoleAttributes {
  id: number;
  userId: number;
  roleId: number;
}
@Table({
  tableName: 'user_roles',
  underscored: false,
  createdAt: false,
  updatedAt: false,
})
export class UserRoles extends Model<UserRoles, UserRoleAttributes> {
  @ApiProperty({ example: '1', description: 'Role Id unique' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: '3', description: 'Reference ID of User' })
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Role)
  @ApiProperty({ example: '23', description: 'Reference ID of Role' })
  @Column({
    type: DataType.INTEGER,
    field: 'role_id',
    allowNull: false,
  })
  roleId: string;
}
