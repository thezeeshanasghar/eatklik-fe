import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraItemComponent } from './extra-item.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: ExtraItemComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:Id2', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraItemRoutingModule { }
