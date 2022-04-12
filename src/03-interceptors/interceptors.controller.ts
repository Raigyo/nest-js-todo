import { Controller, Get } from '@nestjs/common';
import { InterceptorsService } from './interceptors.service';

@Controller('interceptors')
export class InterceptorsController {
  constructor(private readonly interceptorsService: InterceptorsService) {}
  @Get()
  getHello(): string {
    return this.interceptorsService.getInterceptorService();
  }
}
