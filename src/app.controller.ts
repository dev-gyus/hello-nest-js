import {Body, Controller, Get, Param, ParseIntPipe, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {IsNotEmpty} from "class-validator";
import {ExcelParam} from "./dto/ExcelParamDto";

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

  @Get('/createExcel')
  async createExcel(@Query() name: ExcelParam) {
    await this.appService.createExcel(name)
    return { name: name.getSheetName };
  }

  @Get('/createExcelWithStream')
  async createExcelWitheStream(@Query() name: ExcelParam) {
    await this.appService.createExcelWithStream(name)
    return { name: name.getSheetName };
  }
}
