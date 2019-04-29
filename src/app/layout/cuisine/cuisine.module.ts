import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisineRoutingModule } from './cuisine-routing.module';
import { CuisineComponent } from './cuisine.component';
import { AddComponent } from './add/add.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CuisineComponent, AddComponent, EditComponent],
  imports: [CommonModule, CuisineRoutingModule, PageHeaderModule, FormsModule, NgbModule]
})
export class CuisineModule {}
