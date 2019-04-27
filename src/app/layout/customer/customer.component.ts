import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any;
  isLoading = true;
  constructor(private customerService: CustomerService, private modalService: NgbModal, private cityService: CityService) {}

  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(
      res => {
        this.customers = res;
        for (let i = 0; i < this.customers.length; i++) {
          const customer = this.customers[i];
          this.cityService.getCity(customer.CityId).subscribe(data => {
            customer.City = data;
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

  open(content, Id: number) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.customerService.deleteCustomer(Id).subscribe(
          res => {
            this.getAllCustomer();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
