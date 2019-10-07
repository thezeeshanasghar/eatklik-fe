import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { importType } from '@angular/compiler/src/output/output_ast';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: ':ResId/contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
   { path: ':ResId/cuisine', loadChildren: () => import('./cuisine/cuisine.module').then(m => m.CuisineModule) },
  { path: ':ResId/location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
  { path: ':ResId/timing', loadChildren: () => import('./timing/timing.module').then(m => m.TimingModule) },
  { path: ':ResId/menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: ':ResId/extraitem', loadChildren: () => import('./extra-item/extra-item.module').then(m => m.ExtraItemModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}
