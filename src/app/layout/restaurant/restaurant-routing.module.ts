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
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'cuisine', loadChildren: 'src/app/layout/restaurant/cuisine/cuisine.module#CuisineModule' },
  { path: 'location', loadChildren: './location/location.module#LocationModule' },
  { path: 'timing', loadChildren: './timing/timing.module#TimingModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}
