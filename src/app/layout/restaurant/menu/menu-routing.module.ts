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
  {path: 'edit/:MenuId', component: EditComponent},
  { path: ':MenuId/menuitem', loadChildren: './menuitem/menuitem.module#MenuitemModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
