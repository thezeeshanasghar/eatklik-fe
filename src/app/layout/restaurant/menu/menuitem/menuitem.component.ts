import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'src/app/_model/menu_item';
import { ResturantMenuItemsService } from 'src/app/shared/services/resturant-menu-items.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
  animations: [routerTransition()]
})
export class MenuitemComponent implements OnInit {

  menuItems: MenuItem[];
  isLoading = true;
  resourceURL: string;

  constructor(private menuItemService: ResturantMenuItemsService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) {
    this.resourceURL = environment.RESOURCES_URL;
  }
  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuItemService.getMenuItems().subscribe(
      res => { this.menuItems = res; console.log(this.menuItems); this.isLoading = false; },
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
            this.getMenuItems();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
