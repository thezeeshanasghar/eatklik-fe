import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService {
  private readonly API_City = `https://localhost:5001/api/city`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllCity(): Observable<any> {
    const url = `${this.API_City}`;
    return this.http.get(url, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
