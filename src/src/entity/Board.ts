import {BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {BoardStatus} from "../boards/board.enum";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: BoardStatus


    constructor(title: string, description: string, status: BoardStatus) {
        super();
        this.title = title;
        this.description = description;
        this.status = status;
    }
}