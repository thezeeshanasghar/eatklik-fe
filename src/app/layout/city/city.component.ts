import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from './../../shared/services/city.service';
import { from } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [routerTransition()]
})
export class CityComponent implements OnInit {
  cities: any;
  fg: FormGroup;

  constructor(private cityService: CityService, private formBuilder: FormBuilder, public router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fg = this.formBuilder.group({
      name: [null]
    });
    this.getCity();
  }

  getCity() {
    this.cityService.getAllCity().subscribe(
      res => {
        this.cities = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addcity() {
    this.router.navigate(['/city/add']);
  }
}
