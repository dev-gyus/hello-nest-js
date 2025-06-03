import { Module } from '@nestjs/common';
import { BoardsModule } from './src/boards/boards.module';
import {typeORMConfig} from "./src/configs/typeorm.config";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
      TypeOrmModule.forRoot(typeORMConfig),
      BoardsModule
  ],
})
export class AppModule {}
