import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class FilterRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.params.filteredRequest.toLowerCase() === 'frack') {
      // throw new ForbiddenException();
      request.params.filteredRequest = 'Word forbidden!';
      return next.handle();
    } else {
      request.params.filteredRequest = `Hello ${request.params.filteredRequest}`;
      return next.handle();
    }
  }
}
