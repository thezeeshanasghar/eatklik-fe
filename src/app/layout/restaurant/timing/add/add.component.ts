import { Component, OnInit } from '@angular/core';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';
import { RestaurantTimingService } from 'src/app/shared/services/restaurant-timing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  restaurantTiming = new RestaurantTiming();

  constructor(
    private restaurantTimingService: RestaurantTimingService,
    private router: Router,
    private route: ActivatedRoute) {
    this.restaurantTiming.RestaurantId = Number(this.route.snapshot.paramMap.get('ResId'));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.restaurantTimingService.addRestaurantTiming(this.restaurantTiming).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.restaurantTiming.RestaurantId + '/timing']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
