import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  { path: 'add', component: AddComponent },
  { path: ':ResId/contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: ':ResId/cuisine', loadChildren: 'src/app/layout/restaurant/cuisine/cuisine.module#CuisineModule' },
  { path: ':ResId/location', loadChildren: './location/location.module#LocationModule' },
  { path: ':ResId/timing', loadChildren: './timing/timing.module#TimingModule' },
  { path: ':ResId/menu', loadChildren: './menu/menu.module#MenuModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}
