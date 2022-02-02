import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;

      const [bearer, token] = authHeader.split(' ');
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Unauthorized user!' });
      }
      const user = await this.jwtService.verify(token);

      req.user = user;
      return true;
    } catch (error) {
      console.log(error.message);
      throw new UnauthorizedException({ message: 'Unauthorized user!' });
    }
  }
}
