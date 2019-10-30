import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Restaurant } from 'src/app/_model/restaurant';
import { RestaurantLocation } from 'src/app/_model/restaurant_location';
import { RestaurantTiming } from 'src/app/_model/restaurant_timing';
import { RestaurantContact } from 'src/app/_model/restaurant_contact';
import { Menu } from 'src/app/_model/menu';
import { ExtraItem } from 'src/app/_model/extra_items';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends BaseService {

  private readonly API = `${environment.BASE_URL}restaurant/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Restaurant[]> {
    const url = `${this.API}`;
    return this.http.get<Restaurant[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  getByCity(Id): Observable<Restaurant[]> {
    const url = `${this.API}city/${Id}`;
    return this.http.get<Restaurant[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    const url = `${this.API}`;
    return this.http.get<Restaurant>(url + id).pipe(catchError(this.handleError));
  }

  getLocations(Id: number): Observable<RestaurantLocation[]> {
    const url = `${this.API}${Id}/location`;
    return this.http.get<RestaurantLocation[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  getTimings(Id: number): Observable<RestaurantTiming[]> {
    const url = `${this.API}${Id}/timing`;
    return this.http.get<RestaurantTiming[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  getContacts(Id: number): Observable<RestaurantContact[]> {
    const url = `${this.API}${Id}/contact`;
    return this.http.get<RestaurantContact[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  getExtraItems(Id: number): Observable<ExtraItem[]> {
    const url = `${this.API}${Id}/extraitem`;
    return this.http.get<ExtraItem[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  getMenuList(Id: number): Observable<Menu[]> {
    const url = `${this.API}${Id}/menu`;
    return this.http.get<Menu[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  addRestaurant(data): Observable<any> {
    const url = `${this.API}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  editRestaurant(id: number , data ): Observable<any> {
    const url = `${this.API}${id}`;
    return this.http.put(url, data , this.httpOptions).pipe(catchError(this.handleError));
  }


  deleteRestaurant(Id: number): Observable<any> {
    const url = `${this.API}` + Id;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError));
  }
}
