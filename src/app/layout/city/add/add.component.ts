import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { EventEmitter } from 'events';
import { City } from 'src/app/_model/city';
import { CityService } from 'src/app/shared/services/city.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public uploadProgress: number;
  resourceURL: string;
  city = new City();

  constructor(private http: HttpClient, private cityService: CityService, private router: Router) {
    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {}

  onSubmit(form) {
    this.cityService.addCity(this.city).subscribe(
      res => {
        this.router.navigate(['/city']);
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
        this.city.ImagePath = event.body['dbPath'];
      }
    });
  }

}
