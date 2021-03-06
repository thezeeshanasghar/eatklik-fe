import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { CityService } from '../../../shared/services/city.service';
import { City } from 'src/app/_model/city';
import { Promotion } from 'src/app/_model/promotion';
import { PromotionService } from '../../../shared/services/promotion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpromotion',
  templateUrl: './addpromotion.component.html',
  styleUrls: ['./addpromotion.component.scss'],
  animations: [routerTransition()]
})
export class AddpromotionComponent implements OnInit {

  cities: City[];
  promotion = new Promotion();
  success = false;
  constructor(private cityService: CityService, private promotionService: PromotionService, private router: Router) { }

  ngOnInit() {
    this.getCity();
  }
  getCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities;
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }
  onSubmit() {

    this.promotionService.AddNewPromotion(this.promotion).subscribe(
      promotion => { this.promotion = promotion, this.success = true; this.router.navigate(['/promotion']);},
      err => { console.log(err); });
    console.log('Submit button click');
  }
  public closeAlert(alert: any) {
    this.success = false;
  }
}
