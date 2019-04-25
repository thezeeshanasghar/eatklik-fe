import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuisineComponent } from 'src/app/layout/restaurant/cuisine/cuisine.component';

const routes: Routes = [{ path: '', component: CuisineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisineRoutingModule {}
