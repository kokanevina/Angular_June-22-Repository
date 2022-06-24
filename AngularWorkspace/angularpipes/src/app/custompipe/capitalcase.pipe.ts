import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase'
})
export class CapitalcasePipe implements PipeTransform {

  transform(property: string,...args:string[]): string {
    //console.log(property);
    //console.log(args); 
    //1.split : - returns aray
    //2. map : ele: charAt(0)- uppercase, slice:lowercase  : new array
    //3. join : '-' : returns string
    let arr1=property.split(args[0]);
    let arr2=arr1.map(ele=>ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase())
    let capitals=arr2.join(args[0]);
    //return property.split('args[0]').map(ele=>ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase()).join(args[0]);
    //console.log(capitals);
    
    return capitals;
  }

}
