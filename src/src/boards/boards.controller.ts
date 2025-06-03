import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {BoardsService} from "./boards.service";
import {BoardDto, CreateBoardDto} from "./dto/board.dto";
import {BoardStatus} from "./board.enum";
import {BoardStatusValidationPipe} from "./pipes/board.pipe";

@Controller('boards')
export class BoardsController {
    // typescript에서는 접근 제한자가 사용된 생성자 메소드의 인자는 암묵적으로 클래스 프로퍼티로 생성됨
    constructor(private boardService: BoardsService) {}

    // handler 정의
    @Get()
    async getAllBoards(): Promise<BoardDto[]> {
        return await this.boardService.getAllBoards()
    }

    @Get(':id')
    async getBoardBy(@Param('id') id: number): Promise<BoardDto> {
        return await this.boardService.getBoardBy(id)
    }

    // handler 정의
    @Post()
    @UsePipes(ValidationPipe)
    async createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Promise<BoardDto> {
        return await this.boardService.createBoard(createBoardDto)
    }

    @Delete(':id')
    async deleteBoardBy(@Param('id') id: number): Promise<void> {
        await this.boardService.deleteBoardBy(id)
    }

    @Patch(':id')
    async patchBoardStatusBy(
        @Param('id') id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ): Promise<BoardDto> {
        return await this.boardService.patchBoardStatusBy(id, status)
    }
}
