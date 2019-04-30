import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MenuComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule
  ]
})
export class MenuModule { }
