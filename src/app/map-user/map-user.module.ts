import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapUserPageRoutingModule } from './map-user-routing.module';

import { MapUserPage } from './map-user.page';
import{AgmCoreModule} from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapUserPageRoutingModule,
    AgmCoreModule.forRoot({
     /*  apiKey:'AIzaSyD_pAGf9761LDJpRnwJFDhWmC-IW2uVmIY' */
     apiKey:'AIzaSyB-kw1kM6VEefNxrSiN7E4n7XdfZ7j_zE4'
    })
  ],
  declarations: [MapUserPage]
})
export class MapUserPageModule {}
