import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, SettingRoutingModule, PageHeaderModule],
  declarations: [SettingComponent]
})
export class SettingModule {}
