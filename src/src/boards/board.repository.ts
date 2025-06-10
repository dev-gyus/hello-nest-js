import {DataSource, Repository} from "typeorm";
import {Board} from "../entity/Board";

export class BoardRepository extends Repository<Board> {

    constructor(private dataSource: DataSource) {
        super(Board, dataSource.createEntityManager())
    }

    async getBoardBy(id: number): Promise<Board | null> {
        return this.createQueryBuilder('board')
            .where('board.id = :id', { id })
            .getOne()
    }
}