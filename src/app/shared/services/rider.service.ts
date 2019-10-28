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

  getAll(): Observable<Rider[]> {
    const url = `${this.API_Rider}`;
    return this.http.get<Rider[]>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getRidersByCity(Id): Observable<Rider[]> {
    const url = `${this.API_Rider}/city/${Id}`;
    return this.http.get<Rider[]>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getRider(id: number): Observable<Rider> {
    const url = `${this.API_Rider}/`;
    return this.http.get<Rider>(url + id).pipe(catchError(this.handleError));
  }

  add (rider: Rider): Observable <Rider> {
    const url = `${this.API_Rider}`;
    return this.http.post<Rider>(url, rider, this.httpOptions).pipe
    (catchError(this.handleError));
  }
  editRider(id: number, data): Observable<any> {
    const url = `${this.API_Rider}/${id}`;
    return this.http.put(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<any> {
    const url = `${this.API_Rider}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError));
  }
}
