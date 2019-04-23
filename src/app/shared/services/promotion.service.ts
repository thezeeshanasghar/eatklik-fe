import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService extends BaseService {
  private readonly API_Promotion = `${environment.BASE_URL}promotion`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllPromotions(): Observable<any> {
    const url = `${this.API_Promotion}`;
    return this.http.get(url, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
