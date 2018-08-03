import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the HomePage page.
 *{{weatherData?.weather.description}}
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  weatherData
  selectedCity = "pretoria"
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private data : DataProvider) {
  
   // console.log(data.getDataJoburg(this.selectedCity))
  /*  this.data.getDataJoburg(this.selectedCity)
       .subscribe(myInfo =>{
            console.log(myInfo)
            this.weatherData = myInfo;

            console.log(this.weatherData)
    })*/
  }

  ionViewDidLoad(name:string) {
    console.log('ionViewDidLoad HomePage'+name);
  }


  city(){
    /*this.data.getDataJoburg(this.selectedCity).subscribe(myInfo =>{
      console.log(myInfo)
      this.weatherData = myInfo;
    })*/
  }

}
