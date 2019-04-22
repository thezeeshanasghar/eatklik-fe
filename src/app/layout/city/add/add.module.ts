import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, PageHeaderModule],
  declarations: [AddComponent]
})
export class CityModule {}
