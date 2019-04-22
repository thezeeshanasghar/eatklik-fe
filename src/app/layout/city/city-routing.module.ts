import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city.component';

const routes: Routes = [
    {
        path: '',
        component: CityComponent
    },
    { path: 'add', loadChildren: 'src/app/layout/city/add/add.module#AddModule' }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule {}
