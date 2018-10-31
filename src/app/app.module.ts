import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HotelsService } from './services/hotels.service';
import { RoomsService } from './services/rooms.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FiltersComponent } from './filters/filters.component';
import { HotelComponent } from './hotel/hotel.component';
import { RouterModule } from '@angular/router';

import { Price } from './pipes/category.pipe';

import { SliderModule } from 'angular-image-slider';



@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    RoomsComponent,
    FiltersComponent,
    HotelComponent,
    Price,
    HotelListComponent,
    HotelAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot([
      { path: '', component: HotelsComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'hotel/:id', component: HotelComponent },
      { path: 'admin/hotel-list', component: HotelListComponent },
      { path: 'admin/hotel-add', component: HotelAddComponent }
     // { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    HotelsService,
    RoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
