import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuisineComponent } from './cuisine.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: CuisineComponent
  },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisineRoutingModule {}
