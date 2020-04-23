import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderItem } from 'src/app/_model/order_item';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
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
    
    this.customerService.getOrderItemById(Id).subscribe(
      res => {
        this.orderitems = res;
        this.isLoading = false;
        console.log(this.orderitems);
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
