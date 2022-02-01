import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;

      const [bearer, token] = authHeader.split(' ');
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Unauthorized user!' });
      }
      const decodedUser = await this.jwtService.verify(token);

      req.user = decodedUser;
      const user = await this.userService.getById(decodedUser.id);

      // first approach
      //return user.roles.some((role) => requiredRoles.includes(role.name));
      // second approach
      // return data.roles.some(role => requiredRoles.includes(role.value));
    } catch (error) {
      console.log(error.message);
      throw new HttpException('Unauthorized user!', HttpStatus.FORBIDDEN);
    }
  }
}
