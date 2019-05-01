import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuisineService } from 'src/app/shared/services/cuisine.service';
import { environment } from 'src/environments/environment';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantCuisineService } from 'src/app/shared/services/restaurant-cuisine.service';
import { RestaurantCuisine } from 'src/app/_model/restaurant_cuisine';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss'],
  animations: [routerTransition()]
})
export class CuisineComponent implements OnInit {
  resourceURL = environment.RESOURCES_URL;
  restaurantId: any;
  restaurantCuisine: RestaurantCuisine[];
  isLoading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantCuisineService: RestaurantCuisineService,
    private cusineService: CuisineService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.restaurantId = Number(this.activatedRoute.snapshot.paramMap.get('ResId'));
    this.getCuisine();
  }

  getCuisine() {
    this.restaurantCuisineService.getCuisineByRestrantId(this.restaurantId).subscribe(
      res => {
        this.restaurantCuisine = res;
        for (let i = 0; i < this.restaurantCuisine.length; i++) {
          const rc = this.restaurantCuisine[i];
          this.cusineService.getCuisineById(rc.CuisineId).subscribe(data => {
            rc.Cuisine = data;
            if (i === this.restaurantCuisine.length - 1) {
              this.isLoading = false;
            }
          });
        }
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  open(content, Id: string) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        // this.restaurantCuisineService.deleteCuisine(Id).subscribe(
        //   res => {
        //     this.getCuisine();
        //   },
        //   err => {
        //     console.log(err);
        //   }
        // );
      }
    });
  }
}
