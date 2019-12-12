import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/shared/services/rider.service';
import { Order } from 'src/app/_model/order';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-rider-order',
  templateUrl: './rider-order.component.html',
  styleUrls: ['./rider-order.component.scss']
})
export class RiderOrderComponent implements OnInit {
  orders: Order[];
  isLoading = true;

  constructor(
    private riderService: RiderService, private cityService: CityService, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRiderOrders(Number(this.activatedRoute.snapshot.paramMap.get('RiderId')));
  }
  getRiderOrders(Id: number) {
    this.riderService.getOrders(Id).subscribe(
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
