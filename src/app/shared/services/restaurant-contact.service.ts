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

  private readonly URL_Contact = `${environment.BASE_URL}restaurantcontact/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  addRestaurantContact(data: RestaurantContact): Observable<any> {
    return this.http.post(this.URL_Contact, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  getContact(Id: number): Observable<RestaurantContact> {
    return this.http.get<RestaurantContact>(this.URL_Contact + Id, this.httpOptions).pipe(catchError(this.handleError));
  }

  updateRestaurantContact(data: RestaurantContact): Observable<RestaurantContact> {
    return this.http.put<RestaurantContact>(this.URL_Contact + data.Id, data,  this.httpOptions ).pipe(
      catchError(this.handleError));
  }

  deleteRestaurantContact(id: string): Observable<any> {
    return this.http.delete(this.URL_Contact + id, this.httpOptions).pipe(
      catchError(this.handleError));
  }

}
