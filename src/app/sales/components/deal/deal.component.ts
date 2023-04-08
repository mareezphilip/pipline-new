import { Component , Input, OnInit } from '@angular/core';
import { DealServiceService } from '../../service/deal-service.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit{
  
  
  @Input() public stagename :any;
  @Input() public text ='';
  constructor(private service:DealServiceService){

  }
  dummy=0;
  ngOnInit(): void {
     this.getDeals();
    
  }

  deals:any[] = [];
  
  stages: string[] = ["Potential Value" , "Focus" , "Contact Made" ,"Offer Sent" ,"Getting Ready"];
  
  filterddeals:any[] = [] ;
   

  getDeals(){
    this.service.getAllDeals().subscribe((res:any) =>{
      this.deals=res.deals;
      this.filterdeals(this.stagename);
      
      /*for(let d in res.deals){
        console.log(res.deals.status)
        
      }*/
  
    } , error=>{
      alert("somthing get wrong ");
    })

  }
   
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.dummy++;
    }
  }
  filterdeals(stageArr : string ) {
      this.filterddeals.push(...this.deals.filter((deal)=> deal.status === stageArr))
      console.log(this.filterddeals);
      
  } 
  
  
 
}
