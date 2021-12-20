import { join } from 'path';
import { STATIC_FOLDER_NAME } from 'src/config/constants';
export class ImageService {
  public getImageByPath(imgPath) {
    return join(process.cwd(), `${STATIC_FOLDER_NAME}/${imgPath}`);
  }
}
