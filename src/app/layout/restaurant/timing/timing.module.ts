import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimingRoutingModule } from './timing-routing.module';
import { TimingComponent } from './timing.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [TimingComponent],
  imports: [
    CommonModule,
    TimingRoutingModule, PageHeaderModule
  ]
})
export class TimingModule { }
