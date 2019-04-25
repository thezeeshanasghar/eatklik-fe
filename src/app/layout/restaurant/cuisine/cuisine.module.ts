import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisineRoutingModule } from './cuisine-routing.module';
import { CuisineComponent } from 'src/app/layout/restaurant/cuisine/cuisine.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [CuisineComponent],
  imports: [
    CommonModule,
    CuisineRoutingModule, PageHeaderModule
  ]
})
export class CuisineModule { }
