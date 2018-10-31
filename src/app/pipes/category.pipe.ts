import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'price'})
export class Price implements PipeTransform {
  transform(value: string): string {
      let newVal="";
      if(value==='small'){
        newVal= "S";
      } else if(value === 'medium'){
        newVal= "M";
      } else{
        newVal="H";
      }
    /*let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;*/
    return newVal;
  }
}