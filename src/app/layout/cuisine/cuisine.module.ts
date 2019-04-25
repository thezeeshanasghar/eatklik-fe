import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisineRoutingModule } from './cuisine-routing.module';
import { CuisineComponent } from './cuisine.component';
import { AddComponent } from './add/add.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [CuisineComponent, AddComponent],
  imports: [
    CommonModule,
    CuisineRoutingModule, PageHeaderModule
  ]
})
export class CuisineModule { }
