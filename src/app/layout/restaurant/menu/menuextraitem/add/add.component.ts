import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MenuExtraItem } from 'src/app/_model/menu_extra_item';
import { ResturantMenuExtraItemsService } from 'src/app/shared/services/resturant-menu-extraitems.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {Menu} from 'src/app/_model/menu';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public uploadProgress: number;
  resourceURL: string;
  menuextraItem = new MenuExtraItem();
  menu = new Menu();

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,
    private menuItemService: ResturantMenuExtraItemsService, private router: Router) {
    this.resourceURL = environment.RESOURCES_URL;
    this.menuextraItem.MenuId = Number(this.activatedRoute.snapshot.paramMap.get('MenuId'));

  }

  ngOnInit() { }

  onSubmit(form) {
    console.log(this.menuextraItem.MenuId);
    this.menuItemService.addMenuItem(this.menuextraItem).subscribe(
      res => {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      err => {
        console.log(err);
      }
    );
  }

  public uploadLogo = files => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.BASE_URL + 'upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.menuextraItem.ImagePath = event.body['dbPath'];
      }
    });
  }

}

