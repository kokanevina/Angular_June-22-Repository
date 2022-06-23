import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charAt'
})
export class CharAtPipe implements PipeTransform {
  transform(property: string, index:number): string {
    return property.charAt(index);
  }
}

/* 

function add(...ar:number[]){
   return ar.reduce((acc,ele)=>acc+ele);
}

let r1=add();
let r2=add(12);
add(34,56);
add(12,54,23);
add(12,54,23,45);
add(12,54,23,56);
add(12,54,23,78);
 */