import { Component, OnInit } from '@angular/core';
import {routerTransition} from 'src/app/router.animations';
import { FormControl } from '@angular/forms';
import { CityService } from '../../../shared/services/city.service';
import { City } from 'src/app/_model/city';
import {Promotion} from 'src/app/_model/promotion';

@Component({
  selector: 'app-addpromotion',
  templateUrl: './addpromotion.component.html',
  styleUrls: ['./addpromotion.component.scss'],
  animations: [routerTransition()]
})
export class AddpromotionComponent implements OnInit {

  cities: City[];
  promotion = new Promotion ();

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCity();
  }
  getCity() {
    this.cityService.getAllCity().subscribe(
      cities => {
        this.cities = cities;
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }
  onSubmit() {

  }

}
