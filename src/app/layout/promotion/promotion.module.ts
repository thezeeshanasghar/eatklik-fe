import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { AddpromotionComponent } from './addpromotion/addpromotion.component';

@NgModule({
  imports: [CommonModule, PromotionRoutingModule, PageHeaderModule, FormsModule],
  declarations: [PromotionComponent, AddpromotionComponent]
})
export class PromotionModule {}
