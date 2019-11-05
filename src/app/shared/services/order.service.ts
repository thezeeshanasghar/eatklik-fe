import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/_model/order';
import { Rider } from 'src/app/_model/rider';


@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService {
  private readonly API_Order = `${environment.BASE_URL}Order/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllOrder(): Observable<Order[]> {
    const url = `${this.API_Order}`;
    return this.http.get<Order[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  getOrderById(id: number): Observable<Order> {
    const url = `${this.API_Order}`;
    return this.http.get<Order>(url + id).pipe(catchError(this.handleError));
  }

  getOrderByCity(id: number): Observable<Order[]> {
    const url = `${this.API_Order}city/`;
    return this.http.get<Order[]>(url + id).pipe(catchError(this.handleError));
  }

  getOrderByCityandStatus(id: number , status: number): Observable<Order[]> {
    const url = `${this.API_Order}city/${id}/status/${status}`;
    return this.http.get<Order[]>(url).pipe(catchError(this.handleError));
  }
  editOrderStatus(id: number, status): Observable<any> {
    const url = `${this.API_Order}${id}/order-status/${status}`;
    return this.http.put(url, this.httpOptions).pipe(catchError(this.handleError));
  }
//   editPaymentStatus(id: number, status): Observable<any> {
//     const url = `${this.API_Order}${id}/payment-status/${status}`;
//     return this.http.put(url, this.httpOptions).pipe(catchError(this.handleError));
//   }

  editOrderRider(id: number, rider): Observable<any> {
    const url = `${this.API_Order}${id}/order-rider/${rider}`;
    return this.http.put(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  }

