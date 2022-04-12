import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './01-todo/todo.module';
import { PipesModule } from './02-pipes/pipes.module';

@Module({
  imports: [TodoModule, PipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
