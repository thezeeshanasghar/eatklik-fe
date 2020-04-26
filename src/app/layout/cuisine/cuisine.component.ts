import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Cuisine } from 'src/app/_model/cuisine';
import { CuisineService } from 'src/app/shared/services/cuisine.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss'],
  animations: [routerTransition()]
})
export class CuisineComponent implements OnInit {
  cuisines: Cuisine[];
  isLoading = true;
  resourceURL: String;

  constructor(
    private cuisineService: CuisineService, private modalService: NgbModal,private toastr: ToastrService) {
      this.resourceURL = environment.RESOURCES_URL;
    }

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    this.cuisineService.getAll().subscribe(
      res => {
        this.cuisines = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  open(content, Id: number) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.cuisineService.deleteCuisine(Id).subscribe(
          res => {
            this.getCuisines();
            this.toastr.success("Cuisine with Id="+Id+" Deleted Successfully")


          },
          err => {
            this.toastr.error("Something bad happened, please try again later");

            console.log(err);
          }
        );
      }
    });
  }
}
