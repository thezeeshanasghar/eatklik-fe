import { Component, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/_model/customer';
import { CityService } from 'src/app/shared/services/city.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  model = new Customer();
  cities: any;
  uploadImg: boolean = false;
  constructor(private http: HttpClient, public router: Router,private customerService: CustomerService, private cityService: CityService) {}

  ngOnInit() {
    this.getCity();
  }

  onSubmit() {}

  getCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities;
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  async addNewCustomer() {
    await this.customerService.addCustomer(this.model).subscribe(
      res => {
        this.router.navigate(['/customer']);
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
