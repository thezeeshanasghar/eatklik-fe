import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from './../../shared/services/city.service';
import { routerTransition } from 'src/app/router.animations';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { City } from 'src/app/_model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [routerTransition()]
})
export class CityComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService, public router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.getCity();
  }

  getCity() {
    this.cityService.getAllCity().subscribe(
      res => {
        this.cities = res as City[];
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  addcity() {
    this.router.navigate(['/city/add']);
  }
  delete(id) {
    console.log(id);
  }

  async deleteCity(id) {
    await this.cityService.deleteCity(id).subscribe(
      res => {
        this.getCity();
      },
      err => {
        console.log(err);
      }
    );
  }
}
