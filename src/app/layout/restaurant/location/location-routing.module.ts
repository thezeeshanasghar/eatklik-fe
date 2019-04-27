import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: LocationComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule {}
