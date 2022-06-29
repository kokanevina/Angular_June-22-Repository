import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // service available to any component
})
export class MathService {

  constructor() { }

  addFun(...ar:number[]){
    return ar.reduce((acc,ele)=>acc+ele)
  }
  subFun(...ar:number[]){
    return ar.reduce((acc,ele)=>acc-ele)
  }
}

