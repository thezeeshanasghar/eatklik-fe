import { Component, OnInit } from '@angular/core';
import { CuisineService } from 'src/app/shared/services/cuisine.service';
import { Cuisine } from 'src/app/_model/cuisine';
import { RestaurantCuisine } from 'src/app/_model/restaurant_cuisine';
import { ActivatedRoute } from '@angular/router';
import { RestaurantCuisineService } from 'src/app/shared/services/restaurant-cuisine.service';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  animations: [routerTransition()]
})
export class AddComponent implements OnInit {
  cuisines: Cuisine[];
  restaurantCuisine = new RestaurantCuisine();
  id: any;
  constructor(
    private restaurantCuisineService: RestaurantCuisineService,
    private cuisineService: CuisineService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantCuisine.RestaurantId = Number(this.activatedRoute.snapshot.paramMap.get('ResId'));
    this.getCuisines();
  }

  getCuisines() {
    this.cuisineService.getAll().subscribe(
      res => {
        this.cuisines = res;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  onSubmit() {
    this.restaurantCuisine.CuisineId = Number(this.restaurantCuisine.CuisineId);
    this.restaurantCuisineService.addNewCuisine(this.restaurantCuisine.RestaurantId, this.restaurantCuisine).subscribe(
      res => {
        //this.router.navigate(['/restaurant']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
