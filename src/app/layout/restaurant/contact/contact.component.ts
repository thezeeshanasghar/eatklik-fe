import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantContact } from 'src/app/_model/restaurant_contact';
import { RestaurantContactService } from 'src/app/shared/services/restaurant-contact.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [routerTransition()]
})
export class ContactComponent implements OnInit {
  restaurantContacts: RestaurantContact[];
  isLoading = true;

  constructor(private restaurantContactService: RestaurantContactService,
          private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurantContacts();
  }

  getRestaurantContacts() {
    this.restaurantService.getContacts(1).subscribe(
      res => {
        this.restaurantContacts = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }
}
