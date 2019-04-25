import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Restaurant } from 'src/app/_model/restaurant';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [routerTransition()]
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];
  isLoading = true;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getAll().subscribe(
      res => {
        this.restaurants = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
