import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [CommonModule, SettingRoutingModule, PageHeaderModule, FormsModule, NgbModule],
  declarations: [SettingComponent, AddComponent]
})
export class SettingModule {}
