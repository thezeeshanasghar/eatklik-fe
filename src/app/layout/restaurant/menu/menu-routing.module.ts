import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  { path: 'add', component: AddComponent },
  { path: ':Id/menuitem', loadChildren: './menuitem/menuitem.module#MenuitemModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
