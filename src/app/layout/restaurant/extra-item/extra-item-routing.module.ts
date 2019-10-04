import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraItemComponent } from './extra-item.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: ExtraItemComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraItemRoutingModule { }
