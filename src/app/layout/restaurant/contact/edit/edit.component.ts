import { Component, OnInit } from '@angular/core';
import { RestaurantContact } from 'src/app/_model/restaurant_contact';
import { RestaurantContactService } from 'src/app/shared/services/restaurant-contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  restaurantContact = new RestaurantContact();
  cotactId: any;
  constructor(
    private restaurantContactService: RestaurantContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.restaurantContact.RestaurantId = Number(this.activatedRoute.snapshot.paramMap.get('Id'));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {this.cotactId =  data.id; });
    this.restaurantContactService.getContact(this.cotactId).subscribe(
      restaurantContact => {this.restaurantContact = restaurantContact; },
      err  => {console.log(err); });
  }

  onSubmit() {
    this.restaurantContactService.updateRestaurantContact(this.restaurantContact).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.restaurantContact.RestaurantId + '/contact']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
