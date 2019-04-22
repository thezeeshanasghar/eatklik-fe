import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from './../../shared/services/city.service';
import { from } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [routerTransition()]
})
export class CityComponent implements OnInit {
  cities: any;
  fg: FormGroup;

  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private cityService: CityService, private formBuilder: FormBuilder,
    public router: Router,
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.fg = this.formBuilder.group({
      name: [null]
    });
    this.getCity();
  }

  getCity() {
    this.cityService.getAllCity().subscribe(
      res => {
        this.cities = res;
        console.log(res);
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
 
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
 
    this.http.post('https://localhost:5001/api/city', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }


  addcity() {
    this.router.navigate(['/members/vaccine']);
    console.log('add city');
  }
}
