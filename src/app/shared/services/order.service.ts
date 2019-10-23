import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/_model/order';


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
  
  editOrderStatus(id: number, data): Observable<any> {
    const url = `${this.API_Order}${id}/order-status`;
    return this.http.put(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  editOrderRider(id: number, data): Observable<any> {
    const url = `${this.API_Order}${id}/order-rider`;
    return this.http.put(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  }

