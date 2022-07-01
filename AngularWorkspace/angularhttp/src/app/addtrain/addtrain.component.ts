import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

  constructor(private _train:TrainService) { }

  ngOnInit(): void {

  }
  collectData(trainForm:any){
    console.log(trainForm.value);
    console.log( typeof trainForm.value.trainId);
    
   /*  let jsonObject={
      "trainId":trainForm.value.trainId,
      "trainRoute":trainForm.value.trainRoute,
      "trainSource":trainForm.value.trainSource,
      "trainDestination":trainForm.value.trainDestination
    }
     */
    this._train.addTrain(trainForm.value).subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    });
  }
}
