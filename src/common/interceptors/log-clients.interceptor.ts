import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogClientsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const client = {
      date: new Date().toISOString(),
      urlRequest: '',
      ipAdress: '',
      navigator: '',
    };
    const request = context.switchToHttp().getRequest();
    client.ipAdress =
      request.headers['x-forwarde-for'] || request.connection.remoteAdress;
    client.navigator = request.headers['user-agent'];
    client.urlRequest = `${request.method} ${request.url}`;
    return next.handle().pipe(tap(() => console.log('Client: ', client)));
  }
}
