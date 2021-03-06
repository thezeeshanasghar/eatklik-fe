import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/app/_model/customer';
import { Order } from 'src/app/_model/order';
import { OrderItem } from 'src/app/_model/order_item';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {
  private readonly API_Customer = `${environment.BASE_URL}Customer/`;
  private readonly API_Order = `${environment.BASE_URL}Order/`;


  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllCustomer(): Observable<Customer[]> {
    const url = `${this.API_Customer}`;
    return this.http.get<Customer[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  getCustomerByCity(Id): Observable<Customer[]> {
    const url = `${this.API_Customer}city/${Id}`;
    return this.http.get<Customer[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.API_Customer}`;
    return this.http.get<Customer>(url + id).pipe(catchError(this.handleError));
  }

  addCustomer(data): Observable<any> {
    const url = `${this.API_Customer}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  editCustomer(id: number, data): Observable<any> {
    const url = `${this.API_Customer}${id}`;
    return this.http.put(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }
  deleteCustomer(id: number): Observable<any> {
    const url = `${this.API_Customer}${id}`;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  getOrders(Id: number): Observable<Order[]> {
    const url = `${this.API_Customer}${Id}/orders`;
    return this.http.get<Order[]>(url, this.httpOptions).pipe(catchError(this.handleError));
}
  getOrderItemById(Id: number): Observable<OrderItem[]> {
  const url = `${this.API_Order}orderitem/${Id}`;
  return this.http.get<OrderItem[]>(url, this.httpOptions).pipe(catchError(this.handleError));
}
}
