import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Restaurant } from 'src/app/_model/restaurant';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { environment } from 'src/environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [routerTransition()]
})
export class RestaurantComponent implements OnInit {
  resourceURL: string;
  restaurants : Restaurant[];
  isLoading = true;
  cities : any ;
  filterRestaurant : Restaurant[] ;
  CityId : number ;

  constructor(private restaurantService: RestaurantService, private cityService: CityService, private modalService: NgbModal) {
    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {
    this.getCity();
    this.getAllRestaurants();
  }

  getCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities;
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllRestaurants() {
    this.restaurantService.getAll().subscribe(
      res => {
        this.restaurants = res;
        for (let i = 0; i < this.restaurants.length; i++) {
          this.cityService.getCity(this.restaurants[i].CityId).subscribe(data => {
            this.restaurants[i].City = data;
            console.log (this.restaurants[i].City.Id);
            if (i === this.restaurants.length - 1) {
              this.isLoading = false;
            }
          }); 
          } 

          // making a copy to filer Restaurant
          this.filterRestaurant= [];
         for (let j = 0; j < this.restaurants.length; j++) {
             this.filterRestaurant.push(this.restaurants[j])
        }
          
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  open(content, Id: number) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.restaurantService.deleteRestaurant(Id).subscribe(
          res => {
            this.getAllRestaurants();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }

  selectRestaurant () {
    
this.filterRestaurant= [];
for (let i = 0; i < this.restaurants.length; i++) {
  if ( this.restaurants[i].CityId == this.CityId)
  { 
    this.filterRestaurant.push(this.restaurants[i])
  }
}
console.log(this.filterRestaurant);
}
}
