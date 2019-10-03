import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{
  path: '',
  component: CustomerComponent
},
 { path: 'add', component: AddComponent },
 { path: 'edit/:id', component: EditComponent },
 { path: ':CustomerId/orders', loadChildren: () => import('./customer-order/customer-order.module').then(m => m.CustomerOrderModule) }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
