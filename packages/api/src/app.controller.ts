import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {sayHi} from "@root/shared/dist/general";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('saysadfsadsa')
    return sayHi();
  }
}
