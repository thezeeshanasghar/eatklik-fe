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
  restaurants: Restaurant[];
  isLoading = true;

  constructor(private restaurantService: RestaurantService, private cityService: CityService, private modalService: NgbModal) {
    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getAll().subscribe(
      res => {
        this.restaurants = res;
        for (let i = 0; i < this.restaurants.length; i++) {
          this.cityService.getCity(this.restaurants[i].CityId).subscribe(data => {
            this.restaurants[i].City = data;
          }); 
          } 
        this.isLoading = false;
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
            this.getRestaurants();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
