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
export class CuisineService extends BaseService {
  private readonly API_Cuisine = `${environment.BASE_URL}Cuisine`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Cuisine[]> {
    const url = `${this.API_Cuisine}`;
    return this.http.get<Cuisine[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  addCuisine(data): Observable<any> {
    const url = `${this.API_Cuisine}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }
}
