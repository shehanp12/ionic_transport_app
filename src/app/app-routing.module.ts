import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  
 
  {
    path: 'driver-login',
    loadChildren: () => import('./driver-login/driver-login.module').then( m => m.DriverLoginPageModule)
  },
  {
    path: 'details-card',
    loadChildren: () => import('./details-card/details-card.module').then( m => m.DetailsCardPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'map-user',
    loadChildren: () => import('./map-user/map-user.module').then( m => m.MapUserPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'directions',
    loadChildren: () => import('./directions/directions.module').then( m => m.DirectionsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }