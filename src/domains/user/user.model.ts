import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Length,
  Model,
  Table,
} from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../role/role.model';
//UserRolesimport { UserRoles } from '../role/user-role.model';
import { UPLOAD_AVATAR_FOLDER } from './user.constants';

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
  // static afterValidateHook(instance, options, error) {
  //   throw new HttpException(error.message, 400);
  // }

  @ApiProperty({ example: '1', description: 'unique key' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'example@gmail.com', description: 'email' })
  @Length({ min: 3, max: 5 })
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
    get() {
      const relativePath = this.getDataValue('avatar');
      return `/api/v1${relativePath}`;
    },
    set(file) {
      this.setDataValue('avatar', `${UPLOAD_AVATAR_FOLDER}/${file}`);
    },
  })
  avatar: string;

  @ApiProperty({ example: '1', description: 'Role Id' })
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id: number;

  @BelongsTo(() => Role)
  role: Role;
}
