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
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  model = new Cuisine();
  uploadImg: boolean = false;
  imgpath: string;
  constructor(private http: HttpClient, private cuisineService: CuisineService, public router: Router) {}

  ngOnInit() {}

  onSubmit() {}

  async addNewCuisine() {
    await this.cuisineService.addCuisine(this.model).subscribe(
      res => {
        this.router.navigate(['/cuisine']);
      },
      err => {
        console.log(err);
      }
    );
  }

  public uploadFile = files => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.BASE_URL + 'upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';

        //let json = JSON.parse(event.body);
        let dbPath: any = event.body;
        this.onUploadFinished.emit(dbPath);
        this.model.ImagePath = environment.RESOURCES_URL + dbPath.dbPath;
        this.uploadImg = true;
      }
    });
  };
}
