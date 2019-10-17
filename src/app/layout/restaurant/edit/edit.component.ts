import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Restaurant } from 'src/app/_model/restaurant';
import { environment } from 'src/environments/environment';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { Router , ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public progressLogo: number;
  public progressCover: number;
  resourceURL: string;
  restaurant: Restaurant;
  model = new Restaurant ();
  restaurantid: any;
  cities : any ;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, 
    private restaurantService: RestaurantService, private cityService: CityService, private router: Router)
   { this.resourceURL = environment.RESOURCES_URL;}

  
  ngOnInit() {
    this.activatedRoute.params.subscribe(restaurant => { this.restaurantid = restaurant.id; });
    this.getCity();
    this.getRestaurantById();

  }
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

  getRestaurantById() {
    this.restaurantService.getRestaurantById(this.restaurantid).subscribe(
      res => {
        this.model = res ;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.restaurantService.editRestaurant(this.restaurantid , this.model).subscribe(
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
