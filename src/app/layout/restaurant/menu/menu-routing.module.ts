import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  { path: 'add', component: AddComponent },
  {path: 'edit/:Id2', component: EditComponent},
  { path: ':Id/menuitem', loadChildren: './menuitem/menuitem.module#MenuitemModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
