import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shared',
  standalone: true
})
export class SharedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
