import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
