import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ExtraItem } from 'src/app/_model/extra_items';
import { ExtraItemService } from 'src/app/shared/services/restaurant-extra-items.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-extra-item',
  templateUrl: './extra-item.component.html',
  styleUrls: ['./extra-item.component.scss'],
  animations: [routerTransition()]
})
export class ExtraItemComponent implements OnInit {
  extraItems : ExtraItem [];
  isLoading = true;
  resourceURL: string;


  constructor(private extraItemService: ExtraItemService,
          private restaurantService: RestaurantService, private modalService: NgbModal,
          private activatedRoute: ActivatedRoute) { 
            this.resourceURL = environment.RESOURCES_URL;
          }

  ngOnInit() {
    this.getExtraItems(Number(this.activatedRoute.snapshot.paramMap.get('ResId')));
  }
  getExtraItems(Id: number) {
    this.restaurantService.getExtraItems(Id).subscribe(
      res => {
        this.extraItems = res;
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
        this.extraItemService.deleteExtraItem(Id).subscribe(
          res => {
            this.getExtraItems(Number(this.activatedRoute.snapshot.paramMap.get('ResId')));
          },
          err => { console.log(err);
          }
        );
      }
    });
  }
}
