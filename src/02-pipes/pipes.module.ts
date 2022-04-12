import { Module } from '@nestjs/common';
import { PipesController } from './pipes.controller';
import { PipesService } from './pipes.service';

@Module({
  controllers: [PipesController],
  providers: [PipesService],
})
export class PipesModule {}
