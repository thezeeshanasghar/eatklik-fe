import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Order } from 'src/app/_model/order';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {
  orders: Order[];
  isLoading = true;

  constructor(
    private customerService: CustomerService, private cityService: CityService, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerOrders(Number(this.activatedRoute.snapshot.paramMap.get('CustomerId')));
  }
  getCustomerOrders(Id: number) {
    this.customerService.getOrders(Id).subscribe(
      res => {
        this.orders = res;
        this.isLoading = false;
        for (let i = 0; i < this.orders.length; i++) {
          this.cityService.getCity(this.orders[i].CityId).subscribe(data => {
            this.orders[i].City = data;
          });
        }
        
        console.log(this.orders);
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
