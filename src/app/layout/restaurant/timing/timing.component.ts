import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';
import { RestaurantTimingService } from 'src/app/shared/services/restaurant-timing.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

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
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getRestaurantTimings(Number(this.activatedRoute.snapshot.paramMap.get('Id')));
  }

  getRestaurantTimings(Id: number) {
    this.restaurantService.getTimings(Id).subscribe(
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
