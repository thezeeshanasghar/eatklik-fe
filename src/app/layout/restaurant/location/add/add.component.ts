import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/_model/city';
import { RestaurantLocation } from 'src/app/_model/restaurant_location';
import { RestaurantLocationService } from 'src/app/shared/services/restaurant-location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  cities: City[];
  restaurantLocation = new RestaurantLocation();
  constructor(
    private restaurantLocationService: RestaurantLocationService,
    private router: Router,
    private cityService: CityService,
    private route: ActivatedRoute) {
    this.restaurantLocation.RestaurantId = Number(this.route.snapshot.paramMap.get('Id'));
  }

  ngOnInit() {
    this.getCity();
  }

  getCity() {
    this.cityService.getAllCity().subscribe(
      cities => {
        this.cities = cities;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.restaurantLocationService.addRestaurantLocation(this.restaurantLocation).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.restaurantLocation.RestaurantId + '/location']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
