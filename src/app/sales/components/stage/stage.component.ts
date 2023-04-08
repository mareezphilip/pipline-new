import { Component , OnInit } from '@angular/core';
import { DealComponent } from '../deal/deal.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { DealServiceService } from '../../service/deal-service.service';


@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  stages: string[] = ["Potential Value" , "Focus" , "Contact Made" ,"Offer Sent" ,"Getting Ready"];
  searchtext:any;
  



  
  ngOnInit(): void {
    
  }

 
   //stage:string ="Potential Value";

  


   
}
