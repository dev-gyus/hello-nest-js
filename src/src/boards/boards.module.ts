import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import {BoardRepository} from "./board.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [TypeOrmModule.forFeature([BoardRepository])]
})
export class BoardsModule {}
