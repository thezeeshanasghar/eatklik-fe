import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { AddComponent } from './add/add.component';
import { PageHeaderModule } from 'src/app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RestaurantComponent, AddComponent],
  imports: [CommonModule, RestaurantRoutingModule, PageHeaderModule, NgbModule, FormsModule]
})
export class RestaurantModule {}
