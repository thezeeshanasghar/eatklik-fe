import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cuisine } from 'src/app/_model/cuisine';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {
  private readonly API_Customer = `${environment.BASE_URL}Customer/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Cuisine[]> {
    const url = `${this.API_Customer}`;
    return this.http.get<Cuisine[]>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  getCustomerById(id: number): Observable<Cuisine> {
    const url = `${this.API_Customer}`;
    return this.http.get<Cuisine>(url + id).pipe(catchError(this.handleError));
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
}
