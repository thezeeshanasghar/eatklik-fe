import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExtraItem } from 'src/app/_model/extra_items';

@Injectable({
  providedIn: 'root'
})
export class ExtraItemService extends BaseService {

  private readonly URL_ExtraItem = `${environment.BASE_URL}restaurantextraitem/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  addExtraItem(data: ExtraItem): Observable<any> {
    return this.http.post(this.URL_ExtraItem, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  getExtraItem(Id: number): Observable<ExtraItem> {
    return this.http.get<ExtraItem>(this.URL_ExtraItem + Id, this.httpOptions).pipe(catchError(this.handleError));
  }

  updateExtraItem(data: ExtraItem): Observable<ExtraItem> {
    return this.http.put<ExtraItem>(this.URL_ExtraItem + data.Id, data,  this.httpOptions ).pipe(
      catchError(this.handleError));
  }

  deleteExtraItem(id: string): Observable<any> {
    return this.http.delete(this.URL_ExtraItem + id, this.httpOptions).pipe(
      catchError(this.handleError));
  }

}
