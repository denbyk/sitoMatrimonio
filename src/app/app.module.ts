import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LocationComponent } from './layout/location/location.component';
import { StaffComponent } from './layout/staff/staff.component';
import { ListeComponent } from './layout/liste/liste.component';
import { FotoComponent } from './layout/foto/foto.component';
import { UnfinishedComponent } from './layout/unfinished/unfinished/unfinished.component';
import {FormsModule} from '@angular/forms';
import { AfterMarriageComponent } from './layout/after-marriage/after-marriage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LocationComponent,
    StaffComponent,
    ListeComponent,
    FotoComponent,
    UnfinishedComponent,
    AfterMarriageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
