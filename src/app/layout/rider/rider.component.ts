import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Rider } from 'src/app/_model/rider';
import { CityService } from 'src/app/shared/services/city.service';
import { routerTransition } from 'src/app/router.animations';
import { Status } from 'src/app/_model/status';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss'],
  animations: [routerTransition()]
})
export class RiderComponent implements OnInit {

  riders: Rider[];
  isLoading = true;

  Status: Status;

  constructor(
    private riderService: RiderService,
    private cityService: CityService,
    private modalService: NgbModal) {}

  ngOnInit() {
    this.getRiders();
  }

  getRiders() {
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


  open(content, Id: string) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.riderService.delete(Id).subscribe(
          res => {
            this.getRiders();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
