import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';
import { RestaurantTimingService } from 'src/app/shared/services/restaurant-timing.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.scss'],
  animations: [routerTransition()]
})
export class TimingComponent implements OnInit {
  restaurantTimings: RestaurantTiming[];
  isLoading = true;

  constructor(private restaurantTimingService: RestaurantTimingService,
    private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurantTimings();
  }

  getRestaurantTimings() {
    this.restaurantService.getTimings(1).subscribe(
      res => {
        this.restaurantTimings = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
