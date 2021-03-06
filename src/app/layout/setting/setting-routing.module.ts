import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent
  },
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {}
