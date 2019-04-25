import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { LocationComponent } from './location/location.component';
import { TimingComponent } from './timing/timing.component';

const routes: Routes = [{
  path: '',
  component: RestaurantComponent
},
{ path: 'add', component: AddComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'cuisine', component: CuisineComponent },
{ path: 'location', component: LocationComponent },
{ path: 'timing', component: TimingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
