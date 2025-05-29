import { IsNotEmpty } from "class-validator";

export class ExcelParam {
    @IsNotEmpty()
    private readonly sheetName: string;

    get getSheetName(): string {
        return this.sheetName;
    }

}