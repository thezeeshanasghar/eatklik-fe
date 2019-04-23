import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RiderService extends BaseService {
  private readonly API_Rider = `${environment.BASE_URL}rider`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllRiders(): Observable<any> {
    const url = `${this.API_Rider}`;
    return this.http.get(url, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
