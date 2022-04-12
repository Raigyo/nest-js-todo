import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LogClientsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const client = {
      date: new Date().toISOString(),
      urlRequest: '',
      ipAdress: '',
      navigator: '',
    };
    return next.handle();
  }
}
