import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { Rider } from 'src/app/_model/rider';
import { Order } from 'src/app/_model/order';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [CommonModule, RiderRoutingModule, PageHeaderModule, FormsModule, NgbModule,NgxSpinnerModule],
  declarations: [RiderComponent, AddComponent, EditComponent ]
})
export class RiderModule {}
