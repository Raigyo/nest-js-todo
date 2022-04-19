import { Injectable } from '@nestjs/common';

@Injectable()
export class GuardsService {
  getHello(): string {
    return 'Hello Guard module!';
  }

  gethelloVehicle(vehicle: string): string {
    return `Have a good trip with your ${vehicle}`;
  }
}
