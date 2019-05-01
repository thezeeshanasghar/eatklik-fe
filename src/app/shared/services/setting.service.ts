import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Setting } from 'src/app/_model/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService extends BaseService {
  private readonly API_Setting = `${environment.BASE_URL}setting/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Setting[]> {
    const url = `${this.API_Setting}`;
    return this.http.get<Setting[]>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getSetting(id: number): Observable<Setting> {
    const url = `${this.API_Setting}`;
    return this.http.get<Setting>(url + id).pipe(catchError(this.handleError));
  }

  addSetting(data: Setting): Observable<any> {
    const url = `${this.API_Setting}`;
    return this.http.post(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  editSetting(id: number, data: Setting): Observable<any> {
    const url = `${this.API_Setting}${id}/`;
    return this.http.put(url, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  deleteSetting(id: string): Observable<any> {
    const url = `${this.API_Setting}${id}`;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError));
  }
}
