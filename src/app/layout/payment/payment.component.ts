import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Order } from 'src/app/_model/order';
import { CityService } from 'src/app/shared/services/city.service';
import { RiderService } from 'src/app/shared/services/rider.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  orders : Order[];
  CompleteOrders : Order[]=[];
  DispatchOrders : Order[]=[];
  isLoading = true;
  CityId:number;
  cities : any ;
  constructor(private orderService: OrderService , private cityService: CityService, private riderService:RiderService) { }

  ngOnInit() {
      this.getAllCity();

  }

  getOrdersByCity(id) {
    this.orderService.getOrderByCity(id).subscribe(
      res => {
        this.orders = res;
        this.isLoading = false;
        console.log(this.orders);

        // Assigning Cities, Rider  Name
        for (let i = 0; i < this.orders.length; i++) {

           {
          this.cityService.getCity(this.orders[i].CityId).subscribe(data => {
            this.orders[i].City = data;
          });
           }

           if (this.orders[i].RiderId != null)
            {
            this.riderService.getRider(this.orders[i].RiderId).subscribe(data => {
              this.orders[i].Rider = data;
            });
            }
        }

        //Filtering Orders
        for (let i = 0; i < this.orders.length; i++ )
        {

            if (this.orders[i].OrderStatus == 2)
            {
            this.DispatchOrders.push(this.orders[i]);
            }
            if (this.orders[i].OrderStatus == 3)
           {
           this.CompleteOrders.push(this.orders[i]);
           }
        }

        console.log(this.CompleteOrders);

      },
      err => {
        console.log(err);
      }
    );

  }

//   editPaymentStatus(Id , status) {
  //   this.orderService.editPaymentStatus(Id, status).subscribe(
  //     res => {
  //       this.PaymentStatus=[];
  //       this.SelectByCity(this.CityId);
  //     },
  //   err => {
  //     console.log(err);
  //   }
  // );

//}
getAllCity() {
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

}
