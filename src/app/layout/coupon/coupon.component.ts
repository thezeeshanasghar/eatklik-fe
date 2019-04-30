import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/_model/coupon';
import { CouponService } from 'src/app/shared/services/coupon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
  animations: [routerTransition()]
})
export class CouponComponent implements OnInit {

  coupons: Coupon[];
  isLoading = true;

  constructor(
    private couponService: CouponService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getCoupons();
  }

  getCoupons() {
    this.couponService.getAll().subscribe(
      res => {
        this.coupons = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  open(content, Id: number) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.couponService.delete(Id).subscribe(
          res => {
            this.getCoupons();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
