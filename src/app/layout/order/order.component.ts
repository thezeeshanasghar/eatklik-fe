import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Order } from 'src/app/_model/Order';
import { CityService } from 'src/app/shared/services/city.service';
import { CustomerService } from 'src/app/shared/services/customer.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders : Order[];
  NewOrders : Order[];
  ActiveOrders : Order [];
  CompleteOrders : Order[];
  CityOrders : Order[];
  isLoading = true;
  riders : any ;
  model = new Order();
  cities : any ;
  CityId : number ;
  OrderStatus: number;
  RiderId : number;
  city:any;

  constructor(private orderService: OrderService, private riderService: RiderService,
    private cityService: CityService, private customerService:CustomerService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllOrder();
    this.getAllCity(); 
    this.getAllRider();
  }

  getAllOrder() {
    this.orderService.getAllOrder().subscribe(
      res => {
        //this.orders = res['ResponseData'];
        this.orders = res;
        this.isLoading = false;
        console.log(res);

        // Assigning Cities Name
        for (let i = 0; i < this.orders.length; i++) {
          this.cityService.getCity(this.orders[i].CityId).subscribe(data => {
            this.orders[i].City = data;
          });
        }

         // Assigning Customer Name
         for (let i = 0; i < this.orders.length; i++) {
          this.customerService.getCustomerById(this.orders[i].CustomerId).subscribe(data => {
            this.orders[i].Customer = data;
          });
        }

         // making Copy of orders 
         this.CityOrders = [];
         for (let i = 0; i < this.orders.length; i++ )
         { 
           this.CityOrders.push(this.orders[i]); 
         }
         console.log(this.CityOrders);
     
        // making filter of New orders
        this.NewOrders = [];
        for (let i = 0; i < this.orders.length; i++ )
        {
          if (this.orders[i].OrderStatus == 0)
          {
          this.NewOrders.push(this.orders[i]);
          }
        }
        console.log(this.NewOrders);

         // making filter of Active orders
         this.ActiveOrders = [];
         for (let i = 0; i < this.orders.length; i++ )
         {
           if (this.orders[i].OrderStatus == 1)
           {
           this.ActiveOrders.push(this.orders[i]);
           }
         }
         console.log(this.ActiveOrders);

         // making filter of Complete orders
         this.CompleteOrders = [];
         for (let i = 0; i < this.orders.length; i++ )
         {
           if (this.orders[i].OrderStatus == 2)
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
  
  // getOrderById(id) {
  //   this.orderService.getOrderById(id).subscribe(
  //     res => {
  //       this.model = res;
  //       this.model.OrderStatus = this.OrderStatus;
  //       this.model.RiderId = this.RiderId;
  //       console.log(this.model);
  //       this.editOrder(id);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

 

  editOrderRider(Id) {
    this.orderService.editOrderRider(Id, {"RiderId": this.RiderId}).subscribe(
      err => {
        console.log(err);
      }
    );
  }
  
  editOrderStatus(Id) {
    this.orderService.editOrderStatus(Id, {"OrderStatus": this.OrderStatus}).subscribe(
      err => {
        console.log(err);
      }
    );
  }


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

  getCityById(Id) {
    this.cityService.getCity(Id).subscribe(
      res => {
        this.city = res;
        console.log(this.city);
      },
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
 
  SelectByCity () {
    
    this.CityOrders= [];
    for (let i = 0; i < this.orders.length; i++) {
      if ( this.orders[i].CityId == this.CityId)
      { 
        this.CityOrders.push(this.orders[i])
      }
    }
    console.log(this.CityOrders);
   
    // making filter of New orders from City
    this.NewOrders = [];
    for (let i = 0; i < this.CityOrders.length; i++ )
    {
      if (this.CityOrders[i].OrderStatus == 0)
      {
      this.NewOrders.push(this.CityOrders[i]);
      }
    }

     // making filter of Active orders from City
     this.ActiveOrders = [];
     for (let i = 0; i < this.CityOrders.length; i++ )
     {
       if (this.CityOrders[i].OrderStatus == 1)
       {
       this.ActiveOrders.push(this.CityOrders[i]);
       }
     }
      // making filter of Complete orders from City
      this.CompleteOrders = [];
      for (let i = 0; i < this.CityOrders.length; i++ )
      {
        if (this.CityOrders[i].OrderStatus == 2)
        {
        this.CompleteOrders.push(this.CityOrders[i]);
        }
      }

    }


}