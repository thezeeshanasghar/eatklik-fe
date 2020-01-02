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
  { path: ':MenuId/menuitem', loadChildren: () => import('./menuitem/menuitem.module').then(m => m.MenuitemModule) },
  { path: ':MenuId/menuextraitem', loadChildren: () => import('./menuextraitem/menuextraitem.module').then(m => m.MenuextraitemModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
