import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PageHeaderModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PromotionRoutingModule, PageHeaderModule, ReactiveFormsModule],
  declarations: [PromotionComponent]
})
export class PromotionModule {}
