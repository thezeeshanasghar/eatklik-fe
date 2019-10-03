import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/_model/customer';
import { City } from 'src/app/_model/city';
import { EventEmitter } from 'events';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CityService } from 'src/app/shared/services/city.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private customerService:  CustomerService,
    private cityService: CityService,
    private http: HttpClient) { }
  public progress: number;
  public message: string;

  @Output() public onUploadFinished = new EventEmitter();
  customer: Customer;
  model = new Customer();
  cities: City[];
  customerid: any;




   ngOnInit() {
     this.activatedRoute.params.subscribe(customer => { this. customerid = customer.id; });
     this.cityService.getAll().subscribe(cities => { this.cities = cities; });
     this.getCustomerByid();
   }

   getCustomerByid() {
     this.customerService.getCustomerById(this.customerid).subscribe(
       res => {
         this.model = res;
 console.log(this.model);

       },
       err => {
         console.log(err);
       }
     );
   }

 editCustomer() {
     this.customerService.editCustomer(this.customerid, this.model).subscribe(
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
         const dbPath: any = event.body;
         this.onUploadFinished.emit(dbPath);
         this.model.ImagePath = environment.RESOURCES_URL + dbPath.dbPath;
       }
     });
   }

}
