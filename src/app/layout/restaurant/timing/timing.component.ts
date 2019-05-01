import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';
import { RestaurantTimingService } from 'src/app/shared/services/restaurant-timing.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.scss'],
  animations: [routerTransition()]
})
export class TimingComponent implements OnInit {
  restaurantTimings: RestaurantTiming[];
  isLoading = true;

  constructor(private restaurantTimingService: RestaurantTimingService,
    private restaurantService: RestaurantService, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurantTimings(Number(this.activatedRoute.snapshot.paramMap.get('ResId')));
  }

  getRestaurantTimings(Id: number) {
    this.restaurantService.getTimings(Id).subscribe(
      res => {
        this.restaurantTimings = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }
  getDay(id: number): string {
    let day = '';
    switch (id) {
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
      case 7:
        day = 'Sunday';
        break;
    }
    return day;
  }
  open(content, Id: any) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.restaurantTimingService.deleteRestaurantTiming(Id).subscribe(
          res => {
            this.getRestaurantTimings(Number(this.activatedRoute.snapshot.paramMap.get('ResId')));
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
