import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MenuComponent, AddComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class MenuModule { }
