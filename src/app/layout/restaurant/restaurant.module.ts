import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { ContactComponent } from './contact/contact.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { LocationComponent } from './location/location.component';
import { TimingComponent } from './timing/timing.component';
import { AddComponent } from './add/add.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [RestaurantComponent, ContactComponent, CuisineComponent, LocationComponent, TimingComponent, AddComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    PageHeaderModule
  ]
})
export class RestaurantModule { }
