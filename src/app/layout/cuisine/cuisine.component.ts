import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Cuisine } from 'src/app/_model/cuisine';
import { CuisineService } from 'src/app/shared/services/cuisine.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss'],
  animations: [routerTransition()]
})
export class CuisineComponent implements OnInit {
  cuisines: Cuisine[];
  isLoading = true;

  constructor(private cuisineService: CuisineService) {}

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    this.cuisineService.getAll().subscribe(
      res => {
        this.cuisines = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  async deleteCity(id) {
    await this.cuisineService.deleteCuisine(id).subscribe(
      res => {
        this.getCuisines();
      },
      err => {
        console.log(err);
      }
    );
  }
}
