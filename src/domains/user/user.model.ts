import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-role.model';
interface UserCreationAttrs {
  email: string;
  password: string;
  avatar?: string;
}
@Table({
  tableName: 'users',
  underscored: true,
  paranoid: true,
  deletedAt: 'deletedAt',
})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique key' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'example@gmail.com', description: 'email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12345', description: 'email' })
  @Column({
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: '', description: 'upload avatar' })
  @Column({
    type: DataType.STRING(562),
    allowNull: true,
  })
  avatar: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
