import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/_model/city';
import { CityService } from 'src/app/shared/services/city.service';
import { Rider } from 'src/app/_model/rider';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  cities: City[];
  rider = new Rider();
  constructor(
    private cityService: CityService,
    private riderService: RiderService,
    private router: Router) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities.filter(x=>x.Status==0);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.riderService.add(this.rider).subscribe(
      res => { this.rider = res, this.router.navigate(['/rider']); },
      err => { console.log(err); });
  }

}
