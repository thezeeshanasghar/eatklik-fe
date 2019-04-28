import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/_model/city';
import { Review } from 'src/app/_model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseService {
  private readonly API = `${environment.BASE_URL}review`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Review[]> {
    return this.http.get<Review[]>(this.API, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
