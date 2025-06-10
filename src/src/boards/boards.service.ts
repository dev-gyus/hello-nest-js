import {Injectable, NotFoundException} from '@nestjs/common';
import {BoardStatus} from "./board.enum";
import {BoardDto, CreateBoardDto} from "./dto/board.dto";
import { Board } from "src/entity/Board";
import {BoardRepository} from "./board.repository";
import {DataSource} from "typeorm";

@Injectable()
export class BoardsService {
    boards: Board[] = [];
    private boardRepository: BoardRepository;

    constructor(
        private dataSource: DataSource
    ) {
        this.boardRepository = new BoardRepository(this.dataSource);
    }

    async getAllBoards(): Promise<BoardDto[]> {
        return (await this.boardRepository.find()).map((board) => new BoardDto(board));
    }

    async createBoard({title, description}: CreateBoardDto): Promise<BoardDto> {
        const board: Board = new Board(
            title,
            description,
            BoardStatus.PUBLIC
        )
        return new BoardDto(await this.boardRepository.save(board))
    }

    async getBoardBy(id: number): Promise<BoardDto> {
        const board = await this.boardRepository.getBoardBy(id)
        if (!board) {
            throw new NotFoundException(`No board with id ${id} `)
        }
        return board
    }

    async deleteBoardBy(id: number): Promise<void> {
        const boardDto = await this.getBoardBy(id)
        // 주어진 id와 다른 board만 board에 재할당
        await this.boardRepository.delete({id: boardDto.id})
    }

    async patchBoardStatusBy(id: number, status: BoardStatus): Promise<BoardDto> {
        const board = this.boards.find((board) => board.id === id)
        if (!board) {
            throw new NotFoundException(`No board with id ${id}`)
        }
        await this.boardRepository.update(
            {id: board.id},
            {status},
        )
        board.status = status
        return new BoardDto(board)
    }
}
