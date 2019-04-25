import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/shared/services/city.service';
import { EventEmitter } from 'events';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/_model/city';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  cities: City;
  model = new City();

  imgpath: string;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private cityService: CityService, private http: HttpClient) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    this.getCityByid();
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
        this.model.ImagePath = dbPath.dbPath;
        this.imgpath = environment.RESOURCES_URL + this.model.ImagePath;
        this.model.ImagePath = this.imgpath;
      }
    });
  };

  getCityByid() {
    this.cityService.getCity(this.id).subscribe(
      res => {
        this.model = res as City
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
