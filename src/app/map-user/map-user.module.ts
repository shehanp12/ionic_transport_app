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
     apiKey:'AIzaSyDS2HbzXvCBYOENMa9B1GysBld8wHQD9CE'
    })
  ],
  declarations: [MapUserPage]
})
export class MapUserPageModule {}
