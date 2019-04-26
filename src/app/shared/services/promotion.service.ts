import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// -----Added by zameer to import Prmotion from (promotion.ts)
import {Promotion} from 'src/app/_model/promotion';
import {HttpErrorMsgsService} from './http-error-msgs.service';
// ----- End of zameer code ----

@Injectable({
  providedIn: 'root'
})
export class PromotionService extends BaseService {
  private readonly API_Promotion = `${environment.BASE_URL}promotion/`;

  constructor(protected http: HttpClient, private httpErrorMsgsService: HttpErrorMsgsService) {
    super(http);
  }

  getPromotion(id: string): Observable<Promotion> {
    const url = `${this.API_Promotion}`;
    return this.http.get<Promotion>(url + id).pipe(catchError(this.httpErrorMsgsService.handleError));
  }
  getAllPromotions(): Observable<Promotion[]> {
    const url = `${this.API_Promotion}`;
    return this.http.get<Promotion[]>(url, this.httpOptions).pipe(catchError(this.httpErrorMsgsService.handleError)
    );
  }

  AddNewPromotion (promotion: Promotion): Observable <Promotion> {
    const url = `${this.API_Promotion}`;
    console.log(promotion);
    return this.http.post<Promotion>(url, promotion, this.httpOptions).pipe
    (catchError(this.httpErrorMsgsService.handleError));
  }

  UpdatePromotion(promotion: Promotion): Observable <Promotion> {
    const url = `${this.API_Promotion}`;
    return this.http.put<Promotion>(url + promotion.Id, promotion, this.httpOptions).pipe
    (catchError(this.httpErrorMsgsService.handleError));
  }

  DeletePromotion (id: string): Observable<any> {
    const url = `${this.API_Promotion}${id}`;
    return this.http.delete(url, this.httpOptions).pipe
    (catchError(this.httpErrorMsgsService.handleError));
  }


}
