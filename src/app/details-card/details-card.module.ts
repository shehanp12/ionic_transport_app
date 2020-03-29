import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DetailsCardPageRoutingModule } from './details-card-routing.module';

import { DetailsCardPage } from './details-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCardPageRoutingModule
  ],
  declarations: [DetailsCardPage]
})
export class DetailsCardPageModule {

 
  }


