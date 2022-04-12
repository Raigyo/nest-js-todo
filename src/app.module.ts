import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './01-todo/todo.module';
import { PipesModule } from './02-pipes/pipes.module';
import { InterceptorsModule } from './03-interceptors/interceptors.module';

@Module({
  imports: [TodoModule, PipesModule, InterceptorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
