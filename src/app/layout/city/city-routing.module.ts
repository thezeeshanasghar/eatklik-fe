import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: CityComponent
  },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule {}
