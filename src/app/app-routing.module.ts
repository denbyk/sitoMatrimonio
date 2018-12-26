import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {LocationComponent} from './layout/location/location.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'location',
  component: LocationComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
