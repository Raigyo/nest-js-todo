import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class EcoloGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Inside ecolo guard');
    const greenVehicles = this.reflector.get<string[]>(
      'greenVehicles',
      context.getHandler(),
    );
    const req = context.switchToHttp().getRequest();
    console.log('EcoloGuard / greenVehicles', greenVehicles);
    const isGreenVehicle = greenVehicles.includes(req.body.vehicle);
    if (!isGreenVehicle) {
      return false;
    } else {
      return true;
    }
  }
}
