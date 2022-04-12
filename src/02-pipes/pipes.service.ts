import { Injectable } from '@nestjs/common';

@Injectable()
export class PipesService {
  getHelloName(name: string): string {
    return `Hello ${name}`;
  }
}
