import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cuisine } from 'src/app/_model/cuisine';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCuisineService extends BaseService {
  private readonly API_Cuisine = `${environment.BASE_URL}restaurant/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getCuisineByRestrantId(id: number): Observable<Cuisine> {
    const url = `${this.API_Cuisine}`;
    return this.http.get<Cuisine>(url + id + '/cuisine').pipe(catchError(this.handleError));
  }
}
