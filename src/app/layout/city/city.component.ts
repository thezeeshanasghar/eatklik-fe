import { Component, OnInit } from '@angular/core';
import { CityService } from './../../shared/services/city.service';
import { from } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [routerTransition()]
})
export class CityComponent implements OnInit {
  cities: any;
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.getCity();
  }

  getCity() {
    this.cityService.getAllCity().subscribe(
      res => {
        this.cities = res;
        console.log(res);
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  addcity() {
    console.log('add city');
  }
}
