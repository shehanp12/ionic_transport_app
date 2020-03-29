import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { IonicModule } from '@ionic/angular';

import { DriverLoginPageRoutingModule } from './driver-login-routing.module';

import { DriverLoginPage } from './driver-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverLoginPageRoutingModule,
    
  ],
  declarations: [DriverLoginPage,
    FileUploadComponent]
})
export class DriverLoginPageModule {}
