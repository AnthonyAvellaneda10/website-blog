import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
dayjs.extend(relativeTime)

@Pipe({
  name: 'dayJs'
})
export class DayJsPipe implements PipeTransform {

  transform(value: string, method: 'formNow'|'toNow', withoutSuffix: boolean = false): string {
    switch (true) {
      case method === 'formNow':
        return dayjs(value).locale('es').fromNow(withoutSuffix);
      case method === 'toNow':
        return dayjs(value).locale('es').toNow(withoutSuffix);
      default:
        break;
    }
    return '';
  }

}
