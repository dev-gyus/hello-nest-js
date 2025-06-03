import {EntityRepository, Repository} from "typeorm";
import {Board} from "../entity/Board";
import {Injectable} from "@nestjs/common";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

}