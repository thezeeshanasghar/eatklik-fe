import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimingComponent } from './timing.component';

const routes: Routes = [{ path: '', component: TimingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimingRoutingModule {}
