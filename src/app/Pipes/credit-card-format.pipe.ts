import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 16) {
      return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 - $2 - $3 - $4');
    }
    return value;
  }

}
