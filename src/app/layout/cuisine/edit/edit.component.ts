import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cuisine } from 'src/app/_model/cuisine';
import { environment } from 'src/environments/environment';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { CuisineService } from 'src/app/shared/services/cuisine.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  model = new Cuisine();
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private cuisineService: CuisineService,
    public router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    this.getCuisineByid();
  }

  onSubmit() {}

  getCuisineByid() {
    this.cuisineService.getCuisineById(this.id).subscribe(
      res => {
        this.model = res as Cuisine;
      },
      err => {
        console.log(err);
      }
    );
  }

  editCuisine() {
    this.cuisineService.editCuisine(this.id, this.model).subscribe(
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
         this.model.ImagePath = dbPath.dbPath;
      }
    });
  };
}
