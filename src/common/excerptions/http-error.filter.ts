import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  // HttpException,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  //    exc: HttpException  (not working well with sequelize)
  catch(exc: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const status = exc.status | 500;
    const message = exc.message || 'Something went wrong';
    const errorResponse = {
      code: status,
      timestamp: new Date().toLocaleDateString(),
      path: req.url,
      method: req.method,
      msg: exc.message.error || exc.message || 'Something went wrong',
    };

    if (
      exc.name === 'SequelizeUniqueConstraintError' ||
      exc.name === 'SequelizeValidationError'
    ) {
      const errors = exc.errors;
      const errorList: any = errors.map((e) => {
        return `${e.path} - ${e.message}`;
      });
      return res.status(status).json({
        code: status,
        timestamp: new Date().toLocaleDateString(),
        path: req.url,
        method: req.method,
        success: false,
        msg: exc.message,
        errors: errorList,
        type: 'db_validation',
      });
    } else if (exc.name === 'SequelizeDatabaseError') {
      return res.status(status).json({
        code: status,
        timestamp: new Date().toLocaleDateString(),
        path: req.url,
        method: req.method,
        success: false,
        msg: message,
        errors: [{ message: exc.original.sqlMessage }],
      });
    } else if (exc.name === 'BadRequestException') {
      return res.status(status).json({
        code: status,
        timestamp: new Date().toLocaleDateString(),
        path: req.url,
        method: req.method,
        success: false,
        msg: exc.response.error,
        errors: exc.response.message,
        type: 'bed_request',
      });
    }

    return res.status(status).json(errorResponse);
  }
}
