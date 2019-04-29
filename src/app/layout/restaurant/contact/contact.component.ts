import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantContact } from 'src/app/_model/restaurant_contact';
import { RestaurantContactService } from 'src/app/shared/services/restaurant-contact.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
          private restaurantService: RestaurantService, private modalService: NgbModal,
          private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getRestaurantContacts(Number(this.activatedRoute.snapshot.paramMap.get('Id')));
  }

  getRestaurantContacts(Id: number) {
    this.restaurantService.getContacts(Id).subscribe(
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
  open(content, Id: any) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.restaurantContactService.deleteRestaurantContact(Id).subscribe(
          res => {
            this.getRestaurantContacts(Number(this.activatedRoute.snapshot.paramMap.get('Id')));
          },
          err => { console.log(err);
          }
        );
      }
    });
  }
}
