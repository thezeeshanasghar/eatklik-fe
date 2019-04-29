import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuitemRoutingModule } from './menuitem-routing.module';
import { MenuitemComponent } from './menuitem.component';
import { AddComponent } from './add/add.component';
import { FormModule } from 'src/app/layout/form/form.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MenuitemComponent, AddComponent],
  imports: [
    CommonModule,
    MenuitemRoutingModule,
    FormModule,
    NgbModule
  ]
})
export class MenuitemModule { }
