import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionComponent } from './promotion.component';
import {AddpromotionComponent} from './addpromotion/addpromotion.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionComponent
  },
  {
    path: 'addpromotion', component: AddpromotionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule {}
