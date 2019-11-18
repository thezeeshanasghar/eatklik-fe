import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderOrderComponent } from './rider-order.component';




const routes: Routes = [{
  path: '',
  component: RiderOrderComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderOrderRoutingModule {}
