import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/shared/services/city.service';
import { Customer } from 'src/app/_model/customer';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any;
  isLoading = true;
  cities : any ;
  CityId : number ;
  constructor(private customerService: CustomerService, private modalService: NgbModal, private cityService: CityService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getCity();
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(
      res => {
        this.customers = res;
        // for (let i = 0; i < this.customers.length; i++) {
        //   this.cityService.getCity(this.customers[i].CityId).subscribe(data => {
        //     this.customers[i].City = data;
        //     if (i === this.customers.length - 1) {
        //       this.isLoading = false;
        //     }
        //   });
        // }
      },
      err => {
        console.log(err);
      }
    );
  }

  getCustomerByCity(Id) {
    this.spinner.show();
    this.customerService.getCustomerByCity(Id).subscribe(
      res => {
        this.customers = res;
        for (let i = 0; i < this.customers.length; i++) {
          this.cityService.getCity(this.customers[i].CityId).subscribe(data => {
            this.customers[i].City = data;
            if (i === this.customers.length - 1) {
              this.isLoading = false;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
    this.spinner.hide();
  }

  getCustomerById(Id) {
    this.customerService.getCustomerById(Id).subscribe(
      res => {
        this.customers = res;
        for (let i = 0; i < this.customers.length; i++) {
          this.cityService.getCity(this.customers[i].CityId).subscribe(data => {
            this.customers[i].City = data;
            if (i === this.customers.length - 1) {
              this.isLoading = false;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  getCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities;
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  open(content, Id: number) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.customerService.deleteCustomer(Id).subscribe(
          res => {
            this.getCustomerByCity(this.CityId);
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
