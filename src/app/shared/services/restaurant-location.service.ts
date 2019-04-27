import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestaurantLocation } from 'src/app/_model/restaurant_location';

@Injectable({
  providedIn: 'root'
})
export class RestaurantLocationService extends BaseService {

  private readonly API = `${environment.BASE_URL}restaurantlocation`;

  constructor(protected http: HttpClient) {
    super(http);
  }


  addRestaurantLocation(data: RestaurantLocation): Observable<any> {
    const url = `${this.API}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

}
