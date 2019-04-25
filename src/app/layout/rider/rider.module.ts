import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [CommonModule, RiderRoutingModule, PageHeaderModule],
  declarations: [RiderComponent, AddComponent]
})
export class RiderModule {}
