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
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  model = new City();
  uploadimg = false;
  imgpath: string;
  // = "assets/images/slider1.jpg"
  constructor(private http: HttpClient, private cityservice: CityService, public router: Router) {}

  ngOnInit() {}

  onSubmit(form: any) {}
  public uploadFile = files => {
    if (files.length === 0) {
      return;
    }
    this.uploadimg = true;
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.BASE_URL + 'upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';

        // let json = JSON.parse(event.body);
        const dbPath: any = event.body;
        this.onUploadFinished.emit(dbPath);
        this.model.ImagePath = dbPath.dbPath;
        this.imgpath = environment.RESOURCES_URL + this.model.ImagePath;
        this.model.ImagePath = this.imgpath;
      }
    });
  }

  async addNewCity() {
    await this.cityservice.addCity(this.model).subscribe(
      res => {
        this.router.navigate(['/city']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
