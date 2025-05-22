import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { AppService } from './app.service';

class TestParam {
  private readonly _testParam: number;

  constructor(testParam: number) {
    this._testParam = testParam;
  }

  get testParam(): number {
    return this._testParam;
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() testParam: TestParam): string {
    return this.appService.postHello(testParam.testParam);
  }
}
