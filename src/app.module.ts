import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './01-todo/todo.module';
import { PipesModule } from './02-pipes/pipes.module';
import { InterceptorsModule } from './03-interceptors/interceptors.module';
import { GuardsModule } from './04-guards/guards.module';

@Module({
  imports: [TodoModule, PipesModule, InterceptorsModule, GuardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
