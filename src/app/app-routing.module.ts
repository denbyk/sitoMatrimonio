import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {LocationComponent} from './layout/location/location.component';
import {StaffComponent} from './layout/staff/staff.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'location',
  component: LocationComponent,
}, {
  path: 'staff',
  component: StaffComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
