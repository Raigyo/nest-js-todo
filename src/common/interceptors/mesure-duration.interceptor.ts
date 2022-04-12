import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MesureDurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startDate = Date.now();
    return next
      .handle()
      .pipe(
        tap((valueFromRouteHandler) =>
          console.log(`Duration in ms ${Date.now() - startDate}`),
        ),
      );
  }
}
