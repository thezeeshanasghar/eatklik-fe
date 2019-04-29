import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from './../../shared/services/city.service';
import { routerTransition } from 'src/app/router.animations';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { City } from 'src/app/_model/city';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [routerTransition()]
})
export class CityComponent implements OnInit {

  resourceURL: string;
  cities: City[];
  isLoading = true;

  constructor(private cityService: CityService, public router: Router, private modalService: NgbModal) {
    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cityService.getAll().subscribe(
      res => {
        this.cities = res as City[];
        this.isLoading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  edit(id: number) {
    this.router.navigateByUrl('/city/edit/' + id);
  }

  open(content, Id: string) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.cityService.deleteCity(Id).subscribe(
          res => {
            this.getCities();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
