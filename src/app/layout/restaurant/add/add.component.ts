import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Restaurant } from 'src/app/_model/restaurant';
import { environment } from 'src/environments/environment';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { Router } from '@angular/router';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public progressLogo: number;
  public progressCover: number;
  public cities : any;
  resourceURL: string;
  restaurant = new Restaurant();
  constructor(private http: HttpClient, private restaurantService: RestaurantService, 
    private router: Router,private cityService: CityService) {
    this.resourceURL = environment.RESOURCES_URL;
  }

  ngOnInit() {this.getCity();}


  getCity() {
    this.cityService.getAll().subscribe(
      cities => {
        this.cities = cities.filter(x=>x.Status==0);
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(form) {
    this.restaurantService.addRestaurant(this.restaurant).subscribe(
      res => {
        this.router.navigate(['/restaurant']);
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
        this.progressLogo = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.restaurant.LogoImagePath = event.body['dbPath'];
      }
    });
  }

  public uploadCover = files => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.BASE_URL + 'upload', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressCover = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.restaurant.CoverImagePath = event.body['dbPath'];
      }
    });
  }
}
