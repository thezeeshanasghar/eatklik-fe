import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantContact } from 'src/app/_model/restaurant_contact';
import { RestaurantContactService } from 'src/app/shared/services/restaurant-contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  restaurantContact = new RestaurantContact();

  constructor(
    private restaurantContactService: RestaurantContactService,
    private router: Router,
    private route: ActivatedRoute) {
    this.restaurantContact.RestaurantId = Number(this.route.snapshot.paramMap.get('Id'));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.restaurantContactService.addRestaurantContact(this.restaurantContact).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.restaurantContact.RestaurantId + '/contact']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
