import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
 urls=''
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
   
  }

  

  loadCity(name: string){
    console.log("*********")
    this.urls = 'http://api.openweathermap.org/data/2.5/weather?q='+name+'&APPID=1b9457c8c2052750cccc623f828337bb';
    return this.http.get(this.urls);
  }


}
