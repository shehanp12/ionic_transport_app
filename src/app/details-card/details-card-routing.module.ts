import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsCardPage } from './details-card.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCardPageRoutingModule {}
