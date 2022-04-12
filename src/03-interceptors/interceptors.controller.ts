import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { InterceptorsService } from './interceptors.service';
import { MesureDurationInterceptor } from '../common/interceptors/mesure-duration.interceptor';

@Controller('interceptors')
export class InterceptorsController {
  constructor(private readonly interceptorsService: InterceptorsService) {}
  @Get()
  @UseInterceptors(MesureDurationInterceptor)
  getHello(): string {
    return this.interceptorsService.getInterceptorService();
  }
}
