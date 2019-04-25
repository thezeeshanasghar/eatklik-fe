import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Rider } from 'src/app/_model/rider';
import { CityService } from 'src/app/shared/services/city.service';
import { routerTransition } from 'src/app/router.animations';
import { Status } from 'src/app/_model/status';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss'],
  animations: [routerTransition()]
})
export class RiderComponent implements OnInit {
  riders: Rider[];
  isLoading: boolean;

  Status: Status;

  constructor(private riderService: RiderService, private cityService: CityService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getRiders();
  }

  getRiders() {
    this.riderService.getAllRiders().subscribe(
      res => {
        this.riders = res;
        for (const rider of this.riders) {
          this.cityService.getCity(rider.CityId).subscribe(data => {
            rider.City = data;

            this.isLoading = false;
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
