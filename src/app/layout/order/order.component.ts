import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Order } from 'src/app/_model/Order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: any;
  isLoading = true;
  riders : any ;
  model = new Order();
  constructor(private orderService: OrderService, private riderService: RiderService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllOrder(); 
    this.getAllRider();
  }

  getAllOrder() {
    this.orderService.getAllOrder().subscribe(
      res => {
        //this.orders = res['ResponseData'];
        this.orders = res;
        this.isLoading = false;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  getOrderByid() {
    this.orderService.getOrderById(this.orders.Id).subscribe(
      res => {
        this.model = res;
console.log(this.model);

      },
      err => {
        console.log(err);
      }
    );
  }
 
  editCustomer() {
    this.orderService.editOrder(this.orders.Id, this.model).subscribe(
      // res => {
      //   this.router.navigate(['/customer']);
      // },
      err => {
        console.log(err);
      }
    );
  }

  getAllRider() {
    this.riderService.getAll().subscribe(
      res => {
        this.riders = res;
        this.isLoading = false;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
 




  code() {
    // request backedn orderid --> riderid
   // var id = $('option:selected').val();
  }

}