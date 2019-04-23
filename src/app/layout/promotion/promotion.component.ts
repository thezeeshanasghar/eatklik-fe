import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/shared/services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  riders: any;
  constructor(private promotionService: PromotionService) {}

  ngOnInit() {}

  getPromotion() {
    this.promotionService.getAllPromotions().subscribe(
      res => {
        this.riders = res;
        console.log('promotion');
        console.log(this.riders);
      },
      err => {
        console.log(err);
      }
    );
  }
}
