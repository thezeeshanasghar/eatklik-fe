import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Cuisine } from 'src/app/_model/cuisine';
import { environment } from 'src/environments/environment.prod';
import { CuisineService } from 'src/app/shared/services/cuisine.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  public uploadProgress: number;
  resourceURL: string;

  cuisine = new Cuisine();

  constructor(
    private http: HttpClient,
    private cuisineService: CuisineService,
    public router: Router) {
      this.resourceURL = environment.RESOURCES_URL;
    }

  ngOnInit() {}

  async onSubmit() {
    await this.cuisineService.addCuisine(this.cuisine).subscribe(
      res => {
        this.router.navigate(['/cuisine']);
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
        this.cuisine.ImagePath = event.body['dbPath'];
      }
    });
  }

}
