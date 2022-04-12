import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperObjectPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const res = {};
    Object.keys(value).map((key) => (res[key] = value[key].toUpperCase()));
    return res;
  }
}
