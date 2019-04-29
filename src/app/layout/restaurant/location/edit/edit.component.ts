import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/_model/city';
import { RestaurantLocation } from 'src/app/_model/restaurant_location';
import { RestaurantLocationService } from 'src/app/shared/services/restaurant-location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  cities: City[];
  locationId: any;
  restaurantLocation = new RestaurantLocation();
  constructor(
    private activatedRoute: ActivatedRoute, private router: Router
    , private restaurantLocationService: RestaurantLocationService, private cityService: CityService) {
    this.restaurantLocation.RestaurantId = Number(this.activatedRoute.snapshot.paramMap.get('Id'));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(promo => {this.locationId =  promo.id; });
    this.cityService.getAll().subscribe(cities => {
        this.cities = cities, console.log(this.cities);
      }, err => { console.log(err); } );
    this.restaurantLocationService.getLocation(this.locationId).subscribe(
      restaurantLocation => {this.restaurantLocation = restaurantLocation,  console.log(this.restaurantLocation); },
      err => {console.log(err); });
  }

  onSubmit() {
    this.restaurantLocationService.updateRestaurantLocation(this.restaurantLocation).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.restaurantLocation.RestaurantId + '/location']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
