import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimingRoutingModule } from './timing-routing.module';
import { TimingComponent } from './timing.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [TimingComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    TimingRoutingModule, PageHeaderModule, FormsModule
  ]
})
export class TimingModule { }
