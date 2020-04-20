import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Rider } from 'src/app/_model/rider';
import { CityService } from 'src/app/shared/services/city.service';
import { routerTransition } from 'src/app/router.animations';
import { Status } from 'src/app/_model/status';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss'],
  animations: [routerTransition()]
})
export class RiderComponent implements OnInit {

  riders: Rider[];
  isLoading = true;
  cities : any ;
  CityId : number;

  Status: Status;

  constructor(
    private riderService: RiderService,
    private cityService: CityService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal) {}

  ngOnInit() {
    this.getCity();
  }

  getAllRiders() {
    this.riderService.getAll().subscribe(
      res => {
        this.riders = res;
        for (let i = 0; i < this.riders.length; i++) {
          const rider = this.riders[i];
          this.cityService.getCity(rider.CityId).subscribe(data => {
            rider.City = data;
            if (i === (this.riders.length - 1)) {
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

  getRidersByCity(Id) {
    this.spinner.show();
    this.riderService.getRidersByCity(Id).subscribe(
      res => {
        this.riders = res;
        for (let i = 0; i < this.riders.length; i++) {
          const rider = this.riders[i];
          this.cityService.getCity(rider.CityId).subscribe(data => {
            rider.City = data;
            if (i === (this.riders.length - 1)) {
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
    this.spinner.hide();
  }

  getCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities.filter(x=>x.Status==1);
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  open(content, Id: string) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.riderService.delete(Id).subscribe(
          res => {
            this.getRidersByCity(this.CityId);
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
