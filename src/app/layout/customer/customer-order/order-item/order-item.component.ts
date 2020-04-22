import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/_model/order';
import { OrderItem } from 'src/app/_model/order_item';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  orders: Order[];
  orderitems: OrderItem[];
  isLoading = true;

  constructor(
    private customerService: CustomerService, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   this.getCustomerOrders(Number(this.activatedRoute.snapshot.paramMap.get('Id')));
  }
  getCustomerOrders(Id: number) {
    this.customerService.getOrderById(Id).subscribe(
      res => {
       this.orders = res as Order[];
        this.isLoading = false;
       // console.log(this.orders.OrderItems);
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
