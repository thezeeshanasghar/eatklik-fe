import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { EventEmitter } from 'events';
import { City } from 'src/app/_model/city';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public progress: number;
  public message: string;
  msg = 'error';
  @Output() public onUploadFinished = new EventEmitter();

  model = new City();

  constructor(private http: HttpClient, private cityservice: CityService) {}

  ngOnInit() {}

  public uploadFile = files => {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:5001/api/upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';

        //let json = JSON.parse(event.body);
        let dbPath: any = event.body;
        this.onUploadFinished.emit(dbPath);
        console.log(dbPath.dbPath);
        this.model.ImagePath = dbPath.dbPath;
      }
    });
  };

  async addNewCity() {
    console.log(this.model);
    await this.cityservice.addCity(this.model).subscribe(
      res => {},
      err => {
        console.log(err);
      }
    );
  }
}
