import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { MenuextraitemRoutingModule } from './menuextraitem-routing.module';
import { MenuextraitemComponent } from './menuextraitem.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MenuextraitemComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    MenuextraitemRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule
  ]
})
export class MenuextraitemModule { }
