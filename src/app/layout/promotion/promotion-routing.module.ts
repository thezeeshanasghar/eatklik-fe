import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionComponent } from './promotion.component';
import {AddpromotionComponent} from './addpromotion/addpromotion.component';
import { EditpromotionComponent } from './editpromotion/editpromotion.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionComponent
  },
  {
    path: 'addpromotion', component: AddpromotionComponent
  },
  {
    path: 'editpromotion/:id', component: EditpromotionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule {}
