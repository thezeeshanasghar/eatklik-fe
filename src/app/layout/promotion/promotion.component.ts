import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/shared/services/promotion.service';
import { routerTransition } from 'src/app/router.animations';

// -----Added by zameer to import Prmotion from (promotion.ts)
import {Promotion} from 'src/app/_model/promotion';
import { CityService } from './../../shared/services/city.service';
import {Router} from '@angular/router';
// ----- End of zameer code ----

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
  animations: [routerTransition()]
})
export class PromotionComponent implements OnInit {
  promotions: Promotion[];  // Promotion Array
  isLoading = true;
  httpError: string;

  constructor(private promotionService: PromotionService, private cityService: CityService, private router: Router) {}

  ngOnInit() {
    this.getPromotion();
  }

  getPromotion() {
    this.promotionService.getAllPromotions().subscribe(
      promotions => {
        this.promotions =  promotions;
        for (let i = 0; i < this.promotions.length; i++) {
          const promotion = this.promotions[i];
          this.cityService.getCity(promotion.CityId).subscribe(data => {
            promotion.City = data;
            if (i === (this.promotions.length - 1)) {
              this.isLoading = false;
            }
          });
        }
      },
      err => { this.httpError = <any>err;
        console.log(err);
      }
    );

  }

  getPromotionType (id: number): string {
    let value = '';
      switch (id) {
        case 0:
          value = 'Image';
          break;
        case 1:
          value = 'News';
          break;
        case 2:
          value = 'Video';
          break;
      }
    return value;
  }

  DeletePromotion (id) {
    this.promotionService.DeletePromotion(id).subscribe(
      res => {this.getPromotion(); },
      err => { this.httpError = <any>err; console.log(err);
      }
    );
  }
}
