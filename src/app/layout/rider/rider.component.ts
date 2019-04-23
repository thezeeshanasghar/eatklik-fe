import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/shared/services/rider.service';
import { PromotionService } from 'src/app/shared/services/promotion.service';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {
  riders: any;

  constructor(private riderService: RiderService, private promotionService: PromotionService) {}

  ngOnInit() {
    this.getRiders();
    this.getPromotion();
  }

  getRiders() {
    this.riderService.getAllRiders().subscribe(
      res => {
        this.riders = res;
        console.log(this.riders);
      },
      err => {
        console.log(err);
      }
    );
  }
}
