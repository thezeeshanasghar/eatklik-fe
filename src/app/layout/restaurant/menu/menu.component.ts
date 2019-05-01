import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from 'src/app/_model/menu';
import { MenuService } from 'src/app/shared/services/restaurant-menu.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [routerTransition()]
})
export class MenuComponent implements OnInit {

  menus: Menu[];
  isLoading = true;
  resourceURL: string;

  constructor(private menuService: MenuService,
     private modalService: NgbModal, private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute) {
      this.resourceURL = environment.RESOURCES_URL;

    }

  ngOnInit() {
    this.getRestaurantMenus(Number(this.activatedRoute.snapshot.paramMap.get('ResId')));
  }

  getRestaurantMenus (Id: number) {
    this.restaurantService.getMenuList(Id).subscribe(
      res => {this.menus = res; console.log(this.menus); this.isLoading = false; },
      err => { console.log(err); }
    );
  }
  open(content, Id: any) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.menuService.deleteMenuList(Id).subscribe(
          res => {
            this.getRestaurantMenus(Number(this.activatedRoute.snapshot.paramMap.get('ResId')));
          },
          err => { console.log(err);
          }
        );
      }
    });
  }
}
