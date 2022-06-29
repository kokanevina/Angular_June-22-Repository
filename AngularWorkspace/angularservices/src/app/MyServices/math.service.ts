import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // service available to any component,service,pipe
})
export class MathService {
  private counter=0;
  static companyName="Neosoft tech";
  constructor() { }

  addFun(...ar:number[]){
    return ar.reduce((acc,ele)=>acc+ele)
  }
  subFun(...ar:number[]){
    return ar.reduce((acc,ele)=>acc-ele)
  }

  incrementCounter(){
    this.counter++;
  }
  getCounter(){
    return this.counter;
  }
}

