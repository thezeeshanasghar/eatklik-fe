import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [CommonModule, RiderRoutingModule, PageHeaderModule, FormsModule, NgbModule],
  declarations: [RiderComponent, AddComponent, EditComponent]
})
export class RiderModule {}
