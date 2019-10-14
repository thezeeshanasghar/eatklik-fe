import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Order } from 'src/app/_model/order';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {
  orders: Order[];
  isLoading = true;

  constructor(
    private customerService: CustomerService, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerOrders(Number(this.activatedRoute.snapshot.paramMap.get('CustomerId')));
  }
  getCustomerOrders(Id: number) {
    this.customerService.getOrders(Id).subscribe(
      res => {
        this.orders = res;
        this.isLoading = false;
        // let asbc= this.customerOrders[0].OrderItems;
        //         console.log(asbc);
        
        console.log(this.orders);
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
