import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/_model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService {
  private readonly API_City = `${environment.BASE_URL}city/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllCity(): Observable<City[]> {
    const url = `${this.API_City}`;
    return this.http.get<City[]>(url, this.httpOptions).pipe(
      // map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCity(id: number): Observable<City> {
    const url = `${this.API_City}`;
    return this.http.get<City>(url + id).pipe(catchError(this.handleError));
  }

  addCity(data): Observable<any> {
    const url = `${this.API_City}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  deleteCity(id: string): Observable<any> {
    const url = `${this.API_City}${id}`;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError));
  }
}
