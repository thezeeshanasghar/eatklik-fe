import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimingComponent } from './timing.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: TimingComponent },
  { path: 'add', component: AddComponent },
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimingRoutingModule { }
