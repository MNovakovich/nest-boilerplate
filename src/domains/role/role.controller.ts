import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Get('')
  getAll() {
    return this.roleService.getAll();
  }
  // @Get('/users')
  // getAllUserRoles(@Query() query) {
  //   return this.roleService.getAllRoles(query);
  // }
}
