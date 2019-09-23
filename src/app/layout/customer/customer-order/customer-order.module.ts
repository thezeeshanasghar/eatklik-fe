import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrderRoutingModule } from './customerOrder-routing.module';
import { CustomerOrderComponent } from './customer-order.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { OrderItemComponent } from './order-item/order-item.component';

@NgModule({
  declarations: [CustomerOrderComponent],
  imports: [
    CommonModule,
    CustomerOrderRoutingModule, PageHeaderModule, FormsModule
  ]
})
export class CustomerOrderModule { }
