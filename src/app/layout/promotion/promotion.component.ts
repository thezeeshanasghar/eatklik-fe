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
  isLoading: boolean;
  httpError: string;

  constructor(private promotionService: PromotionService, private cityService: CityService, private router: Router) {}

  ngOnInit() {
    this.isLoading = false;
    this.getPromotion();
  }

  getPromotion() {
    this.isLoading = true;
    this.promotionService.getAllPromotions().subscribe(
      promotions => {
        this.promotions =  promotions;
        for (const value of this.promotions) {
          console.log('promotion');
          this.cityService.getCity(value.CityId).subscribe(data => { value.city = data, this.isLoading = false;
            console.log(value);
          });
        }
      },
      err => { this.httpError = <any>err;
        console.log(err);
      }
    );



  }
  addPromotion() {
    this.router.navigate(['promotion/addpromotion']);
  }
}
