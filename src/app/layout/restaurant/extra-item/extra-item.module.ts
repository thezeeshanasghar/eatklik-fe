import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraItemRoutingModule } from './extra-item-routing.module';
import { ExtraItemComponent } from './extra-item.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ExtraItemComponent, AddComponent],
  imports: [CommonModule, ExtraItemRoutingModule, PageHeaderModule, FormsModule, NgbModule]
})
export class ExtraItemModule {}
