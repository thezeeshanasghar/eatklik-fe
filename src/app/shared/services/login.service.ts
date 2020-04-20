import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/_model/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  private readonly API_Order = `${environment.BASE_URL}User/`;

  constructor(protected http: HttpClient) {
    super(http);
  }

  UserLogin(UserName: string,Password: string): Observable<Login> {
    const url = `${this.API_Order}`;
    return this.http.get<Login>(url + UserName+'/'+Password).pipe(catchError(this.handleError));
  }
  }

