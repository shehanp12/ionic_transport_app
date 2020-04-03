import { Component, OnInit,AfterViewInit,ViewChild,ElementRef,Renderer2,Output } from '@angular/core';
import {Plugins,Capacitor} from '@capacitor/core'
import {
  ModalController,
  ActionSheetController,
  AlertController
} from '@ionic/angular';
import { PlaceLocation, Coordinates } from 'src/app/location'
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.page.html',
  styleUrls: ['./map-user.page.scss'],
})
export class MapUserPage implements OnInit,AfterViewInit{
  /* @Output() locationPick = new EventEmitter<PlaceLocation>(); */
  @ViewChild('map', {static: false}) mapElementRef: ElementRef;
  isLoading = false;

  lat:number;
  lng:number;

  constructor(
  
    private renderer: Renderer2,
    private alertCtrl: AlertController,
    private actionSheetCtrl:ActionSheetController
  ) {}


  ngOnInit() {
    /* this.getUserLocation() */
  }
  /* private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      })
    } */

    ngAfterViewInit(){
      this.getGoogleMaps().then(googleMaps=>{
       const mapEl=this.mapElementRef.nativeElement
       const map = new googleMaps.Map(mapEl, {
        center: {lat:-34,lng:150},
        zoom: 16
      });
      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });

      }).catch(err =>{
        console.log(err)
      })

    }


   /*  ngAfterViewInit() {
      .then(googleMaps => {
        this.googleMaps = googleMaps;
        const mapEl = this.mapElementRef.nativeElement;
        const map = new googleMaps.Map(mapEl, {
         
          zoom: 16
        });
      } */


   /*  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDklIkdI-kU2BovXcGHyLAjtJkzIq89y64"
  type="text/javascript"></script> */

    private getGoogleMaps(): Promise<any> {
      const win = window as any;
      const googleModule = win.google;
      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyDklIkdI-kU2BovXcGHyLAjtJkzIq89y64' 
        
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          const loadedGoogleModule = win.google;
          if (loadedGoogleModule && loadedGoogleModule.maps) {
            resolve(loadedGoogleModule.maps);
          } else {
            reject('Google maps SDK not available.');
          }
        };
      });
    }

     onPickLocation(){
      this.actionSheetCtrl.create({
        header:'Please choose ',
        buttons:[
          {text:'AutoLocate',handler:()=>{ this.locateUser();}},
          {text:'Cancel',role:'cancel'}
        ]
      }) .then(actionSheetEl => {
        actionSheetEl.present();
      });
    }
    private locateUser() {
      if (!Capacitor.isPluginAvailable('Geolocation')) {
        this.showErrorAlert()
        
        return
       
    }
    this.isLoading = true;
   
    Plugins.Geolocation.getCurrentPosition().then(geoPosition =>{
      const coordinates:Coordinates={
        lat: geoPosition.coords.latitude,
        lng: geoPosition.coords.longitude
      }
      this.createPlace(coordinates.lat, coordinates.lng);
    }).catch(err =>{
      this.showErrorAlert();

    })


  }

  private createPlace(lat: number, lng: number) {
    const pickedLocation: PlaceLocation = {
      lat: lat,
      lng: lng,
      address: null,
      staticMapImageUrl: null
    };
    this.isLoading = true;
    this.getAddress(lat, lng)
    .pipe(
      switchMap(address => {
        pickedLocation.address = address;
        return of(
          this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14)
        );
      })
    )
    .subscribe(staticMapImageUrl => {
      pickedLocation.staticMapImageUrl = staticMapImageUrl;
      this.selectedLocationImage = staticMapImageUrl;
      this.isLoading = false;
      this.locationPick.emit(pickedLocation);
    });
  }
 
  private showErrorAlert(){
    this.alertCtrl.create({header:'Could not fetch location',
        message:'Please use the map to pick the location'})
    
  }
  





}

