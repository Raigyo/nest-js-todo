import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [TodoModule, PipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
