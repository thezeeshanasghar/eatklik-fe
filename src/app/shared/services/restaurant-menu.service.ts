import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/_model/menu';

@Injectable({
    providedIn: 'root'
})
export class MenuService extends BaseService {

    private readonly URL_Rest_Menu = `${environment.BASE_URL}menu/`;
    constructor(protected http: HttpClient) {
        super(http);
    }

    addMenuList(data: Menu): Observable<any> {
        console.log(data);
        return this.http.post(this.URL_Rest_Menu, data, this.httpOptions).pipe(catchError(this.handleError));
    }
    getMenu(id: number): Observable <Menu> {
        return this.http.get<Menu>(this.URL_Rest_Menu + id, this.httpOptions).pipe(catchError(this.handleError));
    }
    getMenuList(): Observable<Menu[]> {
        return this.http.get<Menu[]>(this.URL_Rest_Menu, this.httpOptions).pipe(catchError(this.handleError));
    }
    updateMenuList(data: Menu): Observable <Menu> {
        return this.http.put<Menu> (this.URL_Rest_Menu + data.Id, data, this.httpOptions).pipe(catchError(this.handleError));
    }
    deleteMenuList(id: number): Observable <any> {
        return this.http.delete(this.URL_Rest_Menu + id, this.httpOptions).pipe(catchError(this.handleError));
    }
}
