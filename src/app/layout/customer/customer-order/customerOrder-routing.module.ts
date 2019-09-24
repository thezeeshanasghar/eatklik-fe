import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOrderComponent } from './customer-order.component';




const routes: Routes = [{
  path: '',
  component: CustomerOrderComponent
},
 { path: ':Id', loadChildren: () => import('./order-item/order-item.module').then(m => m.OrderItemModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOrderRoutingModule {}
