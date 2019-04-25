import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderComponent } from './rider.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: RiderComponent
  },
  { path: 'add', component: AddComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderRoutingModule {}
