import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/user.model';
import { CreateUserDto } from '../user/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(data) {
    const user = await this.validateUser(data);
    return this.generateToken(user);
  }

  async registration(data) {
    const user = await this.userService.getUserByEmail(data.email);
    if (user) {
      throw new HttpException(
        `The user with this email alredy exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    const result = await this.userService.create({
      ...data,
      password: hashPassword,
    });

    this.generateToken(result);
    return 'Successfully Registered!';
  }

  async validatePassword(password: string, hash: string): Promise<any> {
    return await bcrypt.compare(password, hash);
  }

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, role_id: user.role_id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
  async validateUser(userDto: CreateUserDto): Promise<any> {
    const user = await this.userService.getUserByEmail(userDto.email);

    if (!user) {
      throw new HttpException(
        `The user with this email is not exist!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const passwordEquelize = await this.validatePassword(
      userDto.password,
      user.password,
    );
    if (user && passwordEquelize) {
      return user;
    }

    if (!passwordEquelize) {
      throw new HttpException(
        `The password is invalid!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    throw new UnauthorizedException({ message: 'the user is unauthorized!' });
  }
}
