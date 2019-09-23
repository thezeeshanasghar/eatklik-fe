import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [{
  path: '',
  component: CustomerComponent
},
 { path: 'add', component: AddComponent },
 { path: ':CustomerId/orders', loadChildren: () => import('./customer-order/customer-order.module').then(m => m.CustomerOrderModule) }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
