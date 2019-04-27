import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PageHeaderModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { AddpromotionComponent } from './addpromotion/addpromotion.component';
import { EditpromotionComponent } from './editpromotion/editpromotion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [CommonModule, PromotionRoutingModule, PageHeaderModule, FormsModule, NgbAlertModule, NgbModule],
  declarations: [PromotionComponent, AddpromotionComponent, EditpromotionComponent]
})
export class PromotionModule {}
