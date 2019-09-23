import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';

const routes: Routes = [{
  path: '', component: OrderComponent
},
{ path: ':Id', loadChildren: () => import('./order-item/order-item.module').then(m => m.OrderItemModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
