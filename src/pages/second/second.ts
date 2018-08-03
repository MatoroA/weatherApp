import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  selectedCity = "pretoria"
  temp
  weatherData
  myInput
  gif
  imgSrc
  advice
  nu = 50;
  tempChange
  currentTemp


  constructor(public navCtrl: NavController, public navParams: NavParams, private data : DataProvider) {
    this.currentTemp = "Celcius"
      this.data.loadCity(this.selectedCity)
      .subscribe(myInfo =>{
          console.log(myInfo)
          this.weatherData = myInfo;
          this.temp = Math.floor(this.weatherData.main.temp-273.15);
          this.gif = Math.floor(this.weatherData.weather[0].id)
        
          console.log(this.gif)
          
          if(this.gif >=200 && this.gif <= 232){
            this.advice = 'Unless you Must, please stay indoor.';
              this.imgSrc='assets/gif/thunderstorm.gif';
          }else if(this.gif==300 && this.gif <=321){
              this.advice = 'Light rain expected';
              this.imgSrc='assets/gif/drizzle.gif';
          }else if(this.gif >=500 && this.gif <= 531){
              this.advice = 'Prepare for heavy rain.';
              this.imgSrc='assets/gif/raining.gif';
          }else if(this.gif >=600 && this.gif <= 622){
            this.advice='It will snow. Wear something cozy';
            this.imgSrc='assets/gif/snow.gif';
          }else if(this.gif >=701 && this.gif <= 781){
            this.imgSrc='assets/gif/wind.gif';
            this.advice = 'Excepect fog in some area.If your driving please switch on the lights.'
          }else if(this.gif >=801 && this.gif <= 804){
            this.imgSrc='assets/gif/chilli.gif';
            this.advice = 'It might be a bit chilly today.'
          }else if ( this.gif == 800){
            this.imgSrc='assets/gif/sun.gif';
            this.advice = 'Its very hot today.'
          }




      })
    console.log('uyftyftfty')


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  onInput(){
    
console.log('zzzzzzzzz')
console.log('******* works '+this.nu)
      this.data.loadCity(this.myInput)
      .subscribe(myInfo =>{
          console.log(myInfo)
          this.weatherData = myInfo;
          this.temp = Math.floor(this.weatherData.main.temp-273.15);
          this.gif = Math.floor(this.weatherData.weather[0].id)
          console.log(this.gif)

          if(this.gif >=200 && this.gif <= 232){
            this.advice = 'Unless you Must, please stay indoor.';
              this.imgSrc='assets/gif/thunderstorm.gif';
          }else if(this.gif==300 && this.gif <=321){
              this.advice = 'Light rain expected';
              this.imgSrc='assets/gif/drizzle.gif';
          }else if(this.gif >=500 && this.gif <= 531){
              this.advice = 'Prepare for heavy rain.';
              this.imgSrc='assets/gif/raining.gif';
          }else if(this.gif >=600 && this.gif <= 622){
            this.advice='It will snow. Wear something cozy';
            this.imgSrc='assets/gif/snow.gif';
          }else if(this.gif >=701 && this.gif <= 781){
            this.imgSrc='assets/gif/wind.gif';
            this.advice = 'Excepect fog in some area.If your driving please switch on the lights.'
          }else if(this.gif >=801 && this.gif <= 804){
            this.imgSrc='assets/gif/chilli.gif';
            this.advice = 'It might be a bit chilly today.'
          }else if ( this.gif == 800){
            this.imgSrc='assets/gif/sun.gif';
            this.advice = 'Its very hot today.'
          }
      })

     
    }

    temperatureChange(){

      
      switch(this.tempChange){
        case 'Kelvin':
            if(this.currentTemp=='Celcius'){

              this.temp = this.weatherData.main.temp;

            }else if(this.currentTemp=='Fahrenheit'){
             
             this.temp = ((9/5*Math.floor(this.weatherData.main.temp-273)+32)-32) + 273;
            }
            this.currentTemp = this.tempChange;
          break;
          
        case 'Celcius':

            if(this.currentTemp=='Kelvin'){
              this.temp = Math.floor(this.weatherData.main.temp-273.15);
            }else if(this.currentTemp=='Fahrenheit'){
        
              this.temp = 5/9*((9/5*Math.floor(this.weatherData.main.temp-273.15) +32) - 32);
            }
            this.currentTemp = this.tempChange;
          break;

        case 'Fahrenheit':

          if(this.currentTemp=='Celcius'){
            this.temp = 9/5*Math.floor(this.weatherData.main.temp-273)+32;
          }else if(this.currentTemp=='Kelvin'){

            this.temp = 1.8*Math.floor(this.weatherData.main.temp-273.15) + 32;
          }
          this.currentTemp = this.tempChange;
            break;
      }

    }

}
