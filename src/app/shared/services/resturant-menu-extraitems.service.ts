import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/_model/menu';
import { MenuExtraItem } from 'src/app/_model/menu_extra_item';

@Injectable({
  providedIn: 'root'
})
export class ResturantMenuExtraItemsService extends BaseService {

  private readonly URL_Rest_Menu_Item = `${environment.BASE_URL}menuextraitem/`;
  constructor(protected http: HttpClient) {
    super(http);
  }

  addMenuItem(data: MenuExtraItem): Observable<any> {
    console.log(data);
    return this.http.post(this.URL_Rest_Menu_Item, data, this.httpOptions).pipe(catchError(this.handleError));
  }
  getMenuItem(id: number): Observable<MenuExtraItem> {
    return this.http.get<MenuExtraItem>(this.URL_Rest_Menu_Item + id, this.httpOptions).pipe(catchError(this.handleError));
  }

  updateMenuItem(data: MenuExtraItem): Observable<MenuExtraItem> {
    return this.http.put<MenuExtraItem>(this.URL_Rest_Menu_Item + data.Id, data, this.httpOptions).pipe(catchError(this.handleError));
  }
  deleteMenuItem(id: number): Observable<any> {
    return this.http.delete(this.URL_Rest_Menu_Item + id, this.httpOptions).pipe(catchError(this.handleError));
  }
}
