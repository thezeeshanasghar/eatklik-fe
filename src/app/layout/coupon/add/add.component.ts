import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/_model/coupon';
import { CouponService } from 'src/app/shared/services/coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  coupon = new Coupon();

  constructor(
    private couponService: CouponService,
    private router: Router) {
  }

  ngOnInit() {}

  onSubmit() {
    this.coupon.ValidTill = new Date(this.coupon.ValidTill.year, this.coupon.ValidTill.month, this.coupon.ValidTill.day);
    this.couponService.add(this.coupon).subscribe(
      res => {
        this.router.navigate(['/coupon']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
