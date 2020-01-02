import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuextraitemComponent } from './menuextraitem.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: MenuextraitemComponent
  },
  { path: 'add', component: AddComponent },
  {path: 'edit/:MenuItemId', component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuextraitemRoutingModule { }
