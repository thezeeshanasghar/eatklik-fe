import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderComponent } from './rider.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: RiderComponent
  },
  { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: ':RiderId/orders', loadChildren: () => import('./rider-order/rider-order.module').then(m => m.RiderOrderModule) }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderRoutingModule {}
