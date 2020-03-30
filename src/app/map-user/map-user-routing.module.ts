import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapUserPage } from './map-user.page';

const routes: Routes = [
  {
    path: '',
    component: MapUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapUserPageRoutingModule {}
