import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestaurantContact } from 'src/app/_model/restaurant_contact';

@Injectable({
  providedIn: 'root'
})
export class RestaurantContactService extends BaseService {

  private readonly API_Rider = `${environment.BASE_URL}restaurantcontact`;

  constructor(protected http: HttpClient) {
    super(http);
  }

}
