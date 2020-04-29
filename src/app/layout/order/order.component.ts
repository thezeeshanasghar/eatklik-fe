import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Order } from 'src/app/_model/order';
import { CityService } from 'src/app/shared/services/city.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders : Order[];
  NewOrders : any[]=[];
  ActiveOrders : any[]=[];
  DispatchOrders : any[] = [];
  CompleteOrders : Order[]=[];
  CancelOrders : Order[]=[];
  AssignOrders : any[]=[];
  AcceptedOrders : any[]=[];
  RejectedOrders : any[]=[];
  isLoading = true;
  riders : any ;
  model = new Order();
  cities : any ;
  CityId : number ;
  OrderStatus: any[]=[];
  OrderRider: any[]=[];
  RiderId : number;
  city:any;
  dateValue:any;
  Created:any;
  Status:any=['New' , 'Active' , 'Dispatch', 'Complete' , 'Cancel' , 'Assign' , 'Accepted', 'Rejected'];
  Method:any=['Cash' , 'Credit Card' , 'EasyPaisa', 'MobiCash'];

  constructor(private orderService: OrderService, private riderService: RiderService,
    private cityService: CityService, private customerService:CustomerService,
    private modalService: NgbModal, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit() {
  //  this.getAllOrder();
    this.getAllCity();

  }

  getAllOrder() {
    this.orderService.getAllOrder().subscribe(
      res => {
        this.orders = res;
        this.isLoading = false;
        console.log(this.orders);

        // Assigning Cities, Rider and Customer Name
        for (let i = 0; i < this.orders.length; i++) {

           {
          this.cityService.getCity(this.orders[i].CityId).subscribe(data => {
            this.orders[i].City = data;
          });
           }
           {
          this.customerService.getCustomerById(this.orders[i].CustomerId).subscribe(data => {
            this.orders[i].Customer = data;
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
          if (this.orders[i].OrderStatus == 0)
          {
          this.NewOrders.push(this.orders[i]);
          }
          else if (this.orders[i].OrderStatus == 1)
           {
           this.ActiveOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 2)
           {
           this.DispatchOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 3)
           {
           this.CompleteOrders.push(this.orders[i]);
           }
           else  (this.orders[i].OrderStatus == 4)
           {
           this.CancelOrders.push(this.orders[i]);
           }
        }
        console.log(this.NewOrders);
        console.log(this.ActiveOrders);
        console.log(this.DispatchOrders);
        console.log(this.CompleteOrders);
        console.log(this.CancelOrders);

      },
      err => {
        console.log(err);
      }
    );

  }


  SelectByCity(Id,date) {
    console.log("sfdsfsdfdsfds",this.Created);

    if(Id==null)
    {
      return false;
    }
    // this.dateValue=null;
    this.spinner.show();
    this.orders=[];
    this.NewOrders=[];
    this.ActiveOrders=[];
    this.DispatchOrders=[];
    this.CompleteOrders=[];
    this.CancelOrders=[];
    this.AssignOrders=[];
    this.AcceptedOrders=[];
    this.RejectedOrders=[];
    this.getRidersByCity();

    console.log(date);
    if(date){
      var month:string;
      var day:string;
      month=date.month+"";
      day=date.day+"";
      
      this.dateValue=date.year+'-'+(month.length==1?"0"+month:month)+'-'+(day.length==1?"0"+day:day);

    }
     console.log("sfsefasddddddddddd",this.dateValue);
    this.orderService.getOrderByCity(Id).subscribe(
      res => {
        debugger;
        
        if (isNaN(Date.parse(this.dateValue)) == true || this.dateValue==undefined ) {
          this.orders = res;

        }else{
          this.orders = res.filter(x=> x.Created.split("T")[0]==this.dateValue);

        }
        this.isLoading = false;
        console.log(this.orders);

        // Assigning Cities, Rider and Customer Name
        for (let i = 0; i < this.orders.length; i++) {

           {
          this.cityService.getCity(this.orders[i].CityId).subscribe(data => {
            this.orders[i].City = data;
          });
           }
           {
          this.customerService.getCustomerById(this.orders[i].CustomerId).subscribe(data => {
            this.orders[i].Customer = data;
          });
           }
           if (this.orders[i].RiderId != null)
            {
            this.riderService.getRider(this.orders[i].RiderId).subscribe(data => {
              this.orders[i].Rider = data;
            });
            }
        }

        // Filtering Orders
        for (let i = 0; i < this.orders.length; i++ )
        {
          if (this.orders[i].OrderStatus == 0)
          {
          this.NewOrders.push(this.orders[i]);
          }
          else if (this.orders[i].OrderStatus == 1)
           {
           this.ActiveOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 2)
           {
           this.DispatchOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 3)
           {
           this.CompleteOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 4)
           {
           this.CancelOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 5)
           {
           this.AssignOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 6)
           {
           this.AcceptedOrders.push(this.orders[i]);
           }
           else if (this.orders[i].OrderStatus == 7)
           {
           this.RejectedOrders.push(this.orders[i]);
           }
        }
        console.log(this.NewOrders);
        console.log(this.ActiveOrders);
        console.log(this.CompleteOrders);
        console.log(this.CancelOrders);
       this.spinner.hide();

      },
      err => {
        console.log(err);
        this.spinner.hide();
      }
    );
  }

  editOrderRider(Id , rider) {
    this.orderService.editOrderRider(Id, rider).subscribe(
      res => {
        this.OrderRider = [];
      },
      err => {
        console.log(err);
      }
    );
  }

  editOrderStatus(Id , status) {
    
    this.toastr.success('Status Changed','', {
      positionClass: 'toast-bottom-right' });
      this.orderService.editOrderStatus(Id, status).subscribe(
        res => {
          this.OrderStatus=[];
          this.SelectByCity(this.CityId,this.Created);
        },
      err => {
        console.log(err);
      }
    );
    //this.getAllOrder();
  }


  getAllCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities.filter(x=>x.Status==1);
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  getRidersByCity() {
    this.riderService.getRidersByCity(this.CityId).subscribe(
      res => {
        this.riders = res.filter(x=>x.Status==0);
        this.isLoading = false;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


}
