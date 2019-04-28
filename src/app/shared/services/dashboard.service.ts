import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/_model/city';
import { Dashboard } from 'src/app/_model/derived/Dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {
  private readonly API = `${environment.BASE_URL}dashboard`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  get(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.API, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
