import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //A function just to test app is running at /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
