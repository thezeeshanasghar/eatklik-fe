import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderItemRoutingModule } from './orderItem-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { OrderItemComponent } from './order-item.component';

@NgModule({
  declarations: [ OrderItemComponent],
  imports: [
    CommonModule,
    OrderItemRoutingModule, PageHeaderModule, FormsModule
  ]
})
export class OrderItemModule { }
