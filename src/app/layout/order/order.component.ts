import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: any;
  isLoading = true;
  constructor(private orderService: OrderService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllOrder(); 
  }

  getAllOrder() {
    this.orderService.getAllOrder().subscribe(
      res => {
        this.orders = res['ResponseData'];;
        this.isLoading = false;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}