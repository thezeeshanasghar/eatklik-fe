import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderOrderRoutingModule } from './riderOrder-routing.module';
import {RiderOrderComponent} from './rider-order.component' ;
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ RiderOrderComponent],
  imports: [
    CommonModule,
    RiderOrderRoutingModule, PageHeaderModule, FormsModule , NgbModule
  ]
})
export class RiderOrderModule { }
