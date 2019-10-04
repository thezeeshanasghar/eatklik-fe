import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExtraItem } from 'src/app/_model/extra_items';
import { ExtraItemService } from 'src/app/shared/services/restaurant-extra-items.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public progressImage: number;
  resourceURL: string;
  extraItem = new ExtraItem();

  constructor(
    private http: HttpClient,
    private extraItemService: ExtraItemService,
    private router: Router,
    private route: ActivatedRoute) {
    this.extraItem.RestaurantId = Number(this.route.snapshot.paramMap.get('ResId'));

    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.extraItemService.addExtraItem(this.extraItem).subscribe(
      res => {
        this.router.navigate(['/restaurant/' + this.extraItem.RestaurantId + '/extraitem']);
      },
      err => {
        console.log(err);
      }
    );
  }
  public uploadImage = files => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.BASE_URL + 'upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressImage = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.extraItem.ImagePath = event.body['dbPath'];
      }
    });
  }


}
