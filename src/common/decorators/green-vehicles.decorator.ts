import { SetMetadata } from '@nestjs/common';

export const GreenVehicles = (...args: string[]) =>
  SetMetadata('greenVehicles', args);
