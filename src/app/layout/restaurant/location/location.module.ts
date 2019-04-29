import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [LocationComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    LocationRoutingModule, PageHeaderModule, FormsModule
  ]
})
export class LocationModule { }
