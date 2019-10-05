import { Component, OnInit } from '@angular/core';
import { ExtraItem } from 'src/app/_model/extra_items';
import { ExtraItemService } from 'src/app/shared/services/restaurant-extra-items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  extraItem = new ExtraItem();
  public progressImage: number;
  resourceURL: string;

  constructor(
    private http: HttpClient,
    private extraItemService: ExtraItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.extraItem.RestaurantId = Number(this.activatedRoute.snapshot.paramMap.get('ResId'));
    this.extraItem.Id = Number(this.activatedRoute.snapshot.paramMap.get('Id2'));
    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {
    this.extraItemService.getExtraItem(this.extraItem.Id).subscribe(
      extraItem => { this.extraItem = extraItem; },
      err => { console.log(err); });
  }

  onSubmit() {
    this.extraItemService.updateExtraItem(this.extraItem).subscribe(
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
