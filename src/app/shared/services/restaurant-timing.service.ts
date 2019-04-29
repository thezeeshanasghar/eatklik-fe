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

  private readonly URL_Rest_Timing = `${environment.BASE_URL}restauranttiming/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  addRestaurantTiming(data: RestaurantTiming): Observable<any> {
    return this.http.post(this.URL_Rest_Timing, data, this.httpOptions).pipe(catchError(this.handleError));
  }
  getRestaurantTiming(Id: number): Observable<RestaurantTiming> {
    return this.http.get<RestaurantTiming>(this.URL_Rest_Timing + Id, this.httpOptions).pipe(catchError(this.handleError));
  }

  UpdateRestaurantTiming(resTiming: RestaurantTiming): Observable <RestaurantTiming> {
    return this.http.put<RestaurantTiming>(this.URL_Rest_Timing + resTiming.Id, resTiming, this.httpOptions).pipe
    (catchError(this.handleError));
  }

  deleteRestaurantTiming(id: string): Observable<any> {
    return this.http.delete(this.URL_Rest_Timing + id, this.httpOptions).pipe
    (catchError(this.handleError));
  }

}
