import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';

@Injectable({
  providedIn: 'root'
})
export class RestaurantTimingService extends BaseService {

  private readonly API = `${environment.BASE_URL}restauranttiming`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  addRestaurantTiming(data: RestaurantTiming): Observable<any> {
    const url = `${this.API}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

}
