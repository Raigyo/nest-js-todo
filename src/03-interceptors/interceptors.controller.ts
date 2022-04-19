import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { InterceptorsService } from './interceptors.service';
import { MesureDurationInterceptor } from '../common/interceptors/mesure-duration.interceptor';
import { LogClientsInterceptor } from '../common/interceptors/log-clients.interceptor';
import { EnrichResponseInterceptor } from '../common/interceptors/enrich-response.interceptor';
import { EnrichResponsePart2Interceptor } from '../common/interceptors/enrich-response-part2.interceptor';
import { FilterRequestInterceptor } from '../common/interceptors/filter-request.interceptor';

@Controller('interceptors')
export class InterceptorsController {
  constructor(private readonly interceptorsService: InterceptorsService) {}
  @Get()
  @UseInterceptors(
    MesureDurationInterceptor,
    LogClientsInterceptor,
    EnrichResponseInterceptor,
  )
  getHello(): string {
    return this.interceptorsService.getInterceptorService();
  }

  @Get('hello/:name')
  @UseInterceptors(MesureDurationInterceptor, EnrichResponsePart2Interceptor)
  getHelloParam(@Param('name') name: string): string {
    return this.interceptorsService.getInterceptorServiceWithParam(name);
  }

  @Get('filter/:filteredRequest')
  @UseInterceptors(FilterRequestInterceptor)
  getInterceptorServiceWithFilter(
    @Param('filteredRequest') filteredRequest: string,
  ): string {
    return this.interceptorsService.getInterceptorServiceWithFilter(
      filteredRequest,
    );
  }
}
