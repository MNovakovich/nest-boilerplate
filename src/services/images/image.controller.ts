import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { UPLOAD_AVATAR_FOLDER } from '../../domains/user/user.constants';
import { ImageService } from './image.service';
@ApiTags('images')
@Controller('images')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get('/avatars/:imageId')
  async getAvatar(@Param('imageId') imageId, @Res() res) {
    const imagePath = `${UPLOAD_AVATAR_FOLDER}/${imageId}`;
    const image = await this.imageService.getImageByPath(imagePath);
    return res.sendFile(image);
  }
}
