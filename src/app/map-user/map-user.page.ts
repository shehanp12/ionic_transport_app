import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.page.html',
  styleUrls: ['./map-user.page.scss'],
})
export class MapUserPage implements OnInit {

  lat:number;
  lng:number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation()
  }
  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      })
    }
  }
}
