import { IsBoolean, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsNotEmpty()
  password!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  deletedAt?: string | null;
}
