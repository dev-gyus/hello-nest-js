import {BoardStatus} from "../board.enum";
import {IsNotEmpty, IsString} from "class-validator";
import {Board} from "../../entity/Board";

// Model의 선언은 interface, class 둘 다 사용 가능한데 각각의 특징이 있다
// interface => 변수의 타입만을 체크, class => 변수의 타입, 인스턴스 생성까지 가능
// class를 사용하면 런타임 인스턴스이기 때문에 nest.js의 파이프와 같은 기능을 사용하는데 용이하다
export class CreateBoardDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}

export class BoardDto {
    id: number
    title: string
    description: string
    status: BoardStatus

    constructor(board: Board) {
        this.id = board.id
        this.title = board.title
        this.description = board.description
        this.status = board.status
    }
}