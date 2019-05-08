import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisineRoutingModule } from './cuisine-routing.module';
import { CuisineComponent } from 'src/app/layout/restaurant/cuisine/cuisine.component';
import { PageHeaderModule } from 'src/app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CuisineComponent, AddComponent],
  imports: [CommonModule, CuisineRoutingModule, PageHeaderModule, NgbModule, FormsModule]
})
export class CuisineModule {}
