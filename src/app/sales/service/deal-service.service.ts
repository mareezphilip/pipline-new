import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DealServiceService {

  constructor(private http:HttpClient) { 

  }
  getAllDeals(){
   return this.http.get('https://my-json-server.typicode.com/mabukoush1/contacts/db');
   
  }
}
