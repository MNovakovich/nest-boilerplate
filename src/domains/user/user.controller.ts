import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';
import { mutlerStorageSettings } from 'src/config/mutler-file-storage';
import { ImageService } from 'src/services/images/image.service';
import { UPLOAD_AVATAR_FOLDER } from './user.constants';
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService, imageService: ImageService) {}

  // @Roles('user')
  // @UseGuards(RolesGuard)
  @ApiQuery({
    name: 'include',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
  })
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 2000, type: [User] })
  @Get('/')
  getAll(@Query() query: any) {
    console.log(query);
    return this.userService.findAll(query);
  }
  @Post('/:id/upload')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: mutlerStorageSettings(UPLOAD_AVATAR_FOLDER),
    }),
  )
  async uploadFile(@Param('id') id, @UploadedFile() file, @Res() res) {
    console.log(file);
    if (!file)
      throw new HttpException(
        'The image is not uploaded',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    const user = await this.userService.update(id, {
      avatar: file.filename,
    });

    return res.status(200).json(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get userBy Id' })
  @ApiResponse({ status: 2000, type: User })
  @Get('/:id')
  getById(@Param('id') id: string) {
    // const query = { page: 1 };
    return this.userService.getById(+id);
  }

  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 201, type: User })
  @HttpCode(201)
  @Post('/')
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
