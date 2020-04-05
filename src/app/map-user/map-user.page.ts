import { Component, OnInit,AfterViewInit,ViewChild,ElementRef,Renderer2} from '@angular/core';
import {Plugins,Capacitor} from '@capacitor/core'




@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.page.html',
  styleUrls: ['./map-user.page.scss'],
})
export class MapUserPage implements OnInit{
  /* @Output() locationPick = new EventEmitter<PlaceLocation>(); */
  @ViewChild('map', {static: false}) mapElementRef: ElementRef;
  isLoading = false;
  clickListener: any;
  googleMaps: any;


  lat:number;
  lng:number;

  constructor(
    /* private modalCtrl:ModalController, */
     private renderer: Renderer2
  ) {}


  ngOnInit() {
    this.getUserLocation()
   
  }

  private getUserLocation(options?:GeolocationOptions) {
    if(!Capacitor.isPluginAvailable('Geolocation')){
      this.showErrorAlert()
    }
    else{
     /*  Plugins.Geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude
        this.lng=position.coords.longitude

      } */

      Plugins.Geolocation.getCurrentPosition().then((position=>{
        this.lat=position.coords.latitude
        this.lng=position.coords.longitude

      })
      )
        

    
        

    }
   
      
     
  

  }

  
    
 
   
    private showErrorAlert(){

    } 


   

   
   /*  private getGoogleMaps(): Promise<any> {
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
    } */

 /*    
    private createPlace(lat: number, lng: number) {
      const pickedLocation: PlaceLocation = {
        lat: lat,
        lng: lng,
        address: null,
       /*  staticMapImageUrl: null */
     /*  };
      this.isLoading = true;  */
     /* this.getAddress(lat, lng) 
         .pipe(
           s witchMap(address => {
            pickedLocation.address = address;
            
          }) 
        )  */
        
      }

    /*   private getAddress(lat: number, lng: number) {
        return this.http
          .get<any>(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
              'AIzaSyDklIkdI-kU2BovXcGHyLAjtJkzIq89y64'
            }`
          )
          
          
      } */


      
      interface GeolocationOptions {

        enableHighAccuracy ?: true;
      }


