import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantLocation } from 'src/app/_model/restaurant_location';
import { RestaurantLocationService } from 'src/app/shared/services/restaurant-location.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  animations: [routerTransition()]
})
export class LocationComponent implements OnInit {
  restaurantLocations: RestaurantLocation[];
  isLoading = true;

  constructor(private restaurantLocationService: RestaurantLocationService,
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {
    this.getRestaurantLocations(Number(this.activatedRoute.snapshot.paramMap.get('Id')));
  }

  getRestaurantLocations(Id: number) {
    this.restaurantService.getLocations(Id).subscribe(
      res => {
        this.restaurantLocations = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
