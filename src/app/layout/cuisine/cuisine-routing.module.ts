import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuisineComponent } from './cuisine.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: CuisineComponent
  },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisineRoutingModule {}
