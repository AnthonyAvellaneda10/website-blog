import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return value;
    } else {
      // Trunca el texto y agrega puntos suspensivos (...) al final
      return value.slice(0, limit) + '...';
    }
  }

}
