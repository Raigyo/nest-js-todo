import { Injectable } from '@nestjs/common';

@Injectable()
export class InterceptorsService {
  getInterceptorService(): string {
    return 'Hello Interceptor module!';
  }
}
