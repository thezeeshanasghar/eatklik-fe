import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MenuExtraItem } from 'src/app/_model/menu_extra_item';
import { ResturantMenuExtraItemsService } from 'src/app/shared/services/resturant-menu-extraitems.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MenuService} from 'src/app/shared/services/restaurant-menu.service';
@Component({
  selector: 'app-menuextraitem',
  templateUrl: './menuextraitem.component.html',
  styleUrls: ['./menuextraitem.component.scss'],
  animations: [routerTransition()]
})
export class MenuextraitemComponent implements OnInit {

  menuextraItems: MenuExtraItem[];
  isLoading = true;
  resourceURL: string;
  menuextraItem = new MenuExtraItem();
  constructor(private menuItemService: ResturantMenuExtraItemsService,
    private modalService: NgbModal, private menuService: MenuService,
    private activatedRoute: ActivatedRoute) {
    this.resourceURL = environment.RESOURCES_URL;
    this.menuextraItem.MenuId = Number(this.activatedRoute.snapshot.paramMap.get('MenuId'));
  }
  ngOnInit() {
    this.getMenuExtraItems();
  }

  getMenuExtraItems() {
    console.log(this.menuextraItem.MenuId);
    this.menuService.getMenuExtraItems(this.menuextraItem.MenuId).subscribe(
      res => { this.menuextraItems = res; console.log(this.menuextraItems); this.isLoading = false; },
      err => { console.log(err); }
    );
  }
  getMenuSize (id: number): string {
    let value = '';
      switch (id) {
        case 0:
          value = 'Nothing';
          break;
        case 1:
          value = 'Half';
          break;
        case 2:
          value = 'Full';
          break;
      }
    return value;
  }
  open(content, Id: any) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.menuItemService.deleteMenuItem(Id).subscribe(
          res => {
            this.getMenuExtraItems();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
