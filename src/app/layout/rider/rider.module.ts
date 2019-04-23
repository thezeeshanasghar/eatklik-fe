import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider.component';
import { PageHeaderModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RiderRoutingModule, PageHeaderModule, ReactiveFormsModule],
  declarations: [RiderComponent]
})
export class RiderModule {}
