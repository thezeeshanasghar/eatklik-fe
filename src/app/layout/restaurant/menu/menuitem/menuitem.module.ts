import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { MenuitemRoutingModule } from './menuitem-routing.module';
import { MenuitemComponent } from './menuitem.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MenuitemComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    MenuitemRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule
  ]
})
export class MenuitemModule { }
