import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/_model/city';
import { Coupon } from 'src/app/_model/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService extends BaseService {
  private readonly API = `${environment.BASE_URL}CouponCode/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.API, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getSingle(Id: number): Observable<Coupon> {
    return this.http.get<Coupon>(this.API + Id).pipe(catchError(this.handleError));
  }

  add(data: Coupon): Observable<any> {
    return this.http.post(this.API , data, this.httpOptions).pipe(catchError(this.handleError));
  }

  edit(Id: number, data: Coupon): Observable<any> {
    return this.http.put(this.API + '/' + Id, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  delete(Id: number): Observable<any> {
    return this.http.delete(this.API + '/' + Id, this.httpOptions).pipe(catchError(this.handleError));
  }
}
