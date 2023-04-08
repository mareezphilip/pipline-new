import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(deals: any[], searchtext:String ): any[] {
    if(!searchtext) return deals;
    else{
     return deals.filter((deal) => deal.first_name.toLowerCase().includes(searchtext.toLowerCase()) || deal.last_name.toLowerCase().includes(searchtext.toLowerCase()) || deal.email.toLowerCase().includes(searchtext.toLowerCase()) );

    }
    
  }

  
}
