import { Controller, Get } from '@nestjs/common';

@Controller('ml')
export class MlController {
  @Get('auth')
  auth(props): string {
    return props && JSON.stringify(props);
  }
}
