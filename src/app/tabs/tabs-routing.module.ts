import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path:'details-card',
        children:[
          {
            path:'',
            loadChildren:'../details-card/details-card.module#DetailsCardPageModule'
          }
        ]
      },
      {
        path:'map-user',
        children:[
          {
            path:'',
            loadChildren:'../map-user/map-user.module#MapUserPageModule'
          }
        ]
      },
      {
        path:'user-login',
        children:[
          {
            path:'',
            loadChildren:'../user-login/user-login.module#UserLoginPageModule'
          }
        ]
      },
    ]
  },
  {
    path:'',
    redirectTo:'tabs/map-user',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
