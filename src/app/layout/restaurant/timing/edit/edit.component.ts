import { Component, OnInit } from '@angular/core';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';
import { RestaurantTimingService } from 'src/app/shared/services/restaurant-timing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  restaurantTiming = new RestaurantTiming();
  timingId: any;
  constructor(
    private restaurantTimingService: RestaurantTimingService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.restaurantTiming.RestaurantId = Number(this.activatedRoute.snapshot.paramMap.get('ResId'));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(promo => {this.timingId =  promo.id; });
    this.restaurantTimingService.getRestaurantTiming(this.timingId).subscribe(
      restaurantTiming => {this.restaurantTiming = restaurantTiming; },
      err => { console.log(err); }
    );
  }

  onSubmit() {
    this.restaurantTimingService.UpdateRestaurantTiming(this.restaurantTiming).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.restaurantTiming.RestaurantId + '/timing']);
      },
      err => {
        console.log(err);
      }
    );
  }
}

