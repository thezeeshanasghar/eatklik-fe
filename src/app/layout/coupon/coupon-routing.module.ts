import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponComponent } from './coupon.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: CouponComponent
  },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
