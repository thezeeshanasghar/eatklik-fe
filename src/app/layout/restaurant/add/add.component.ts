import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'src/app/_model/restaurant';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  restaurant = new Restaurant();
  constructor(private http: HttpClient, private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit() {}

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

    this.http.post(environment.BASE_URL + 'upload', formData).subscribe(response => {
      this.restaurant.LogoImagePath = response['dbPath'];
    });
  }

  public uploadCover = files => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.BASE_URL + 'upload', formData).subscribe(response => {
      this.restaurant.CoverImagePath = response['dbPath'];
    });
  }
}
