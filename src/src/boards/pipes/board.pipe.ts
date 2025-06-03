import {ArgumentMetadata, BadRequestException, PipeTransform} from "@nestjs/common";
import {BoardStatus} from "../board.enum";

export class BoardStatusValidationPipe implements PipeTransform {

    readonly StatusOptions = [
        BoardStatus.PUBLIC,
        BoardStatus.PRIVATE,
    ]

    transform(value: any, metadata: ArgumentMetadata): any {
        if (this.isStatusValid(value.toUpperCase()) === -1)
            throw new BadRequestException(
                `Invalid status ${value}. Status must be ${this.StatusOptions.join(', ')}`
            )
        return value
    }

    private isStatusValid(status: any): number {
        return this.StatusOptions.indexOf(status)
    }

}