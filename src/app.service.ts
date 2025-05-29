import {Injectable, Logger} from '@nestjs/common';
const ExcelJS = require('exceljs')
import * as path from "node:path";
import * as fs from "node:fs";
import {ExcelParam} from "./dto/ExcelParamDto";

@Injectable()
export class AppService {

  constructor(private readonly logger: Logger) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  postHello(testParam: number) {
    this.logger.log("testParam: " + testParam);
    this.logger.error("testParam: " + testParam);
    this.logger.warn("testParam: " + testParam);
    this.logger.debug("testParam: " + testParam);
    return "test완";
  }

  async createExcel(name: ExcelParam) {
    const workBook = new ExcelJS.Workbook()
    const sheet = workBook.addWorksheet('TestSheet')
    sheet.columns = [
      { header: 'Id', key: 'id', width: 10, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
      { header: 'Name', key: 'name', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
      { header: 'D.O.B.', key: 'DOB', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' } } }
    ]
    sheet.addRows([
      [1,`2`,new Date()],
      { id: 2, name: `3`, DOB: new Date() },
      { id: 3, name: `4`, DOB: new Date() }
    ])
    const fileName = `test-non-stream-excel.xlsx`
    const saveDir = path.join(__dirname, '../excel')
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir)
    }
    await workBook.xlsx.writeFile(`${saveDir}/${fileName}`)
  }

  async createExcelWithStream(name: ExcelParam) {
    const workBook = new ExcelJS.stream.xlsx.WorkbookWriter({
      filename: path.join(__dirname, '../excel/test-stream-excel.xlsx'),
      useStyles: true,
    })
    const sheet = workBook.addWorksheet('TestSheet2')
    sheet.columns = [
      { header: 'Id', key: 'id', width: 10, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
      { header: 'Name', key: 'name', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
      { header: 'D.O.B.', key: 'DOB', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' } } }
    ]
    sheet.addRow({ id: 1, name: `2`, DOB: new Date() }).commit()
    sheet.addRow({ id: 2, name: `3`, DOB: new Date() }).commit()
    sheet.addRow({ id: 3, name: `4`, DOB: new Date() }).commit()
    await workBook.commit()
  }
}
