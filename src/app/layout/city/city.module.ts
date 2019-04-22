import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [CommonModule, CityRoutingModule, PageHeaderModule],
  declarations: [CityComponent, AddComponent]
})
export class CityModule {}
