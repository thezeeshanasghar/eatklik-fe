import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [CommonModule, CityRoutingModule, PageHeaderModule, FormsModule],
  declarations: [CityComponent, AddComponent]
})
export class CityModule {}
