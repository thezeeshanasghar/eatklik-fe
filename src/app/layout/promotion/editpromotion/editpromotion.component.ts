import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import {ActivatedRoute} from '@angular/router';

import { CityService } from '../../../shared/services/city.service';
import { City } from 'src/app/_model/city';
import { Promotion } from 'src/app/_model/promotion';
import { PromotionService } from '../../../shared/services/promotion.service';

@Component({
  selector: 'app-editpromotion',
  templateUrl: './editpromotion.component.html',
  styleUrls: ['./editpromotion.component.scss'],
  animations: [routerTransition()]
})
export class EditpromotionComponent implements OnInit {

  promotion: Promotion;
  promoId: any;
  isLoading = true;
  cities: City[];

  constructor(private activatedRoute: ActivatedRoute, private promotionService: PromotionService, private cityService: CityService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(promo => {this.promoId =  promo.id; });
    this.cityService.getAllCity().subscribe(cities => { this.cities = cities;
      },
      err => {
        console.log(err);
      }
    );
    this.promotionService.getPromotion(this.promoId).subscribe(promotion => {this.promotion = promotion,
      this.isLoading = false; },
      err => {
        console.log(err);
      }
      );
  }
  UpdatePromotion() {
    this.promotionService.UpdatePromotion(this.promotion).subscribe(promo => {promo = promo, console.log('Promotion Updated'); },
        err => {
          console.log(err);
        }
    );
  }

}
