import { Injectable } from '@nestjs/common';

@Injectable()
export class InterceptorsService {
  getInterceptorService(): string {
    return 'Hello Interceptor module!';
  }
  getInterceptorServiceWithParam(name: string): string {
    return `Hello ${name}`;
  }
  getInterceptorServiceWithFilter(filteredRequest: string): string {
    return `${filteredRequest}`;
  }
}
