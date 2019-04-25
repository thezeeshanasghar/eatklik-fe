import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Rider } from 'src/app/_model/rider';

@Injectable({
  providedIn: 'root'
})
export class RiderService extends BaseService {
  private readonly API_Rider = `${environment.BASE_URL}rider`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllRiders(): Observable<Rider[]> {
    const url = `${this.API_Rider}`;
    return this.http.get<Rider[]>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
