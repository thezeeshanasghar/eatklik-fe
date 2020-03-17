import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiderService } from 'src/app/shared/services/rider.service';
import { RiderRoutingModule } from '../rider-routing.module';
import { Rider } from 'src/app/_model/rider';
import { City } from 'src/app/_model/city';
import { CityService } from '../../../shared/services/city.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  rider: Rider;
  model = new Rider();
  cities: City[];
  riderid: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private riderService: RiderService,
    private cityService: CityService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(rider => { this.riderid = rider.id; });
    this.cityService.getAll().subscribe(cities => { this.cities = cities.filter(x=>x.Status==1); });
    this.getRiderByid();
  }

  getRiderByid() {
    this.riderService.getRider(this.riderid).subscribe(
      res => {
        this.model = res as unknown as Rider;

      },
      err => {
        console.log(err);
      }
    );
  }

  editRider() {
    this.riderService.editRider(this.riderid, this.model).subscribe(
      res => {
        this.router.navigate(['/rider']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
