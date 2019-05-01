import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/_model/menu';
import { MenuItem } from 'src/app/_model/menu_item';

@Injectable({
    providedIn: 'root'
})
export class MenuService extends BaseService {

    private readonly URL_Rest_Menu = `${environment.BASE_URL}menu/`;
    constructor(protected http: HttpClient) {
        super(http);
    }
    getMenuItems(Id: number): Observable<MenuItem[]> {
        const url = `${this.URL_Rest_Menu}${Id}/menuitem`;
        return this.http.get<MenuItem[]>(url , this.httpOptions).pipe(catchError(this.handleError));
      }
    addMenuList(data: Menu): Observable<any> {
        console.log(data);
        console.log(this.URL_Rest_Menu);
        return this.http.post(this.URL_Rest_Menu, data, this.httpOptions).pipe(catchError(this.handleError));
    }
    getMenu(id: number): Observable <Menu> {
        return this.http.get<Menu>(this.URL_Rest_Menu + id, this.httpOptions).pipe(catchError(this.handleError));
    }
    updateMenuList(data: Menu): Observable <Menu> {
        return this.http.put<Menu> (this.URL_Rest_Menu + data.Id, data, this.httpOptions).pipe(catchError(this.handleError));
    }
    deleteMenuList(id: number): Observable <any> {
        return this.http.delete(this.URL_Rest_Menu + id, this.httpOptions).pipe(catchError(this.handleError));
    }
}
