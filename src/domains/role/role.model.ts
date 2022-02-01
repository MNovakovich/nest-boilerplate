import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
//import { UserRoles } from './user-role.model';
interface RoleAttributes {
  id: number;
  name: string;
  description: string;
}
@Table({
  tableName: 'roles',
  underscored: true,
  timestamps: false,
})
export class Role extends Model<Role, RoleAttributes> {
  @ApiProperty({ example: '1', description: 'Role Id unique' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'admin', description: 'title of role' })
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
    set(value: string) {
      const name = value.toLocaleUpperCase();
      this.setAttributes('name', name);
    },
  })
  name: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING(562),
    allowNull: true,
  })
  description: string;

  // @HasMany(() => User)
  // users: User[];
}
