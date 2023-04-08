import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './components/deal/deal.component';
import{HttpClientModule} from '@angular/common/http';
import { StageComponent } from './components/stage/stage.component';
import { FormsModule } from '@angular/forms';
import {DragDropModule}from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    DealComponent,
    StageComponent,
    FilterPipe 

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    
  ],
  exports :[
    DealComponent,
    StageComponent,
   
  ]
})
export class SalesModule { }
