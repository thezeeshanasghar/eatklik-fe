import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_model/menu';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/restaurant-menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public uploadProgress: number;
  resourceURL: string;
  menu = new Menu();

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private menuService: MenuService, private router: Router) {
    this.resourceURL = environment.RESOURCES_URL;
    this.menu.Id = Number(this.activatedRoute.snapshot.paramMap.get('MenuId'));
  }

  ngOnInit() {
    // console.log('update Menu');
    this.menuService.getMenu(this.menu.Id).subscribe(
      menu => { this.menu = menu; }
    );
  }

  onSubmit(form) {
    this.menuService.addMenuList(this.menu).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.menu.Id + '/menu']);
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
        this.menu.ImagePath = event.body['dbPath'];
      }
    });
  }

}
