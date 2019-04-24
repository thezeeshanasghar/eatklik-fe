import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/shared/services/promotion.service';

// -----Added by zameer to import Prmotion from (promotion.ts)
import {Promotion} from 'src/app/_model/promotion';
import { CityService } from './../../shared/services/city.service';
// ----- End of zameer code ----

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  promotions: Promotion[];  // Promotion Array
  isLoading: boolean;
  httpError: string;

  constructor(private promotionService: PromotionService, private cityService: CityService) {}

  ngOnInit() {
    this.isLoading = false;
    this.getPromotion();
  }

  getPromotion() {
    this.isLoading = true;
    this.promotionService.getAllPromotions().subscribe(
      promotions => {
        this.promotions =  promotions, this.isLoading = false;
        console.log('promotion');
        console.log(this.promotions);
      },
      err => { this.httpError = <any>err;
        console.log(err);
      }
    );
    // for (let i = 0; i < this.promotions.length; i++ ) {
      for (var value of this.promotions) {
    //  this.cityService.getCity(this.promotions[i].CityId);
      console.log(this.cityService.getCity(value.CityId));
   }

  }
  addPromotion() {

  }
}
