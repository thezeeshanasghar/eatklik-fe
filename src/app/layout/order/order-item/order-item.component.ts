import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/_model/order';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  orders: Order[];
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
        this.orders = res['ResponseData'] as Order[];
        this.isLoading = false;
        console.log(this.orders);
        //  let items= this.orderitems[0].OrderItems;
        //       console.log(items); 
        
        // console.log(this.orderitems);
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
