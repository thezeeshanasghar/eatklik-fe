import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Restaurant } from 'src/app/_model/restaurant';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [routerTransition()]
})
export class RestaurantComponent implements OnInit {

  resourceURL: string;
  restaurants: Restaurant[];
  isLoading = true;

  constructor(private restaurantService: RestaurantService) {
    this.resourceURL = environment.RESOURCES_URL;
  }

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
