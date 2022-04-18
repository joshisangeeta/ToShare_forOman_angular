import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, arg: string): number {
     let exp =   parseFloat(arg)
    return  Math.pow(value,exp);
  }

}
