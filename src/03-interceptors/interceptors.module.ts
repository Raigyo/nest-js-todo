import { Module } from '@nestjs/common';
import { InterceptorsController } from './interceptors.controller';
import { InterceptorsService } from './interceptors.service';

@Module({
  controllers: [InterceptorsController],
  providers: [InterceptorsService],
})
export class InterceptorsModule {}
