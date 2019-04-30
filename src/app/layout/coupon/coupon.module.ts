import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [CouponComponent, AddComponent],
  imports: [
    CommonModule,
    CouponRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule
  ]
})
export class CouponModule { }
