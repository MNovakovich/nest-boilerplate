import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsNotEmpty()
  avatar?: string;

  @IsOptional()
  deletedAt?: string | null;

  // @IsOptional()
  // role_id?: number;
}
