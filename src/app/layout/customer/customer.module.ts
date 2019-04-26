import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, AddComponent],
  imports: [CommonModule, CustomerRoutingModule, PageHeaderModule, FormsModule]
})
export class CustomerModule {}