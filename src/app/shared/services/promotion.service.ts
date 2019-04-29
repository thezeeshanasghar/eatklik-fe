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
  private readonly URL_Promotion = `${environment.BASE_URL}promotion/`;

  constructor(protected http: HttpClient, private httpErrorMsgsService: HttpErrorMsgsService) {
    super(http);
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(this.URL_Promotion + id).pipe(catchError(this.httpErrorMsgsService.handleError));
  }
  getAllPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.URL_Promotion, this.httpOptions).pipe(catchError(this.httpErrorMsgsService.handleError)
    );
  }

  AddNewPromotion (promotion: Promotion): Observable <Promotion> {
    console.log(promotion);
    return this.http.post<Promotion>(this.URL_Promotion, promotion, this.httpOptions).pipe
    (catchError(this.httpErrorMsgsService.handleError));
  }

  UpdatePromotion(promotion: Promotion): Observable <Promotion> {
    return this.http.put<Promotion>(this.URL_Promotion + promotion.Id, promotion, this.httpOptions).pipe
    (catchError(this.httpErrorMsgsService.handleError));
  }

  DeletePromotion (id: string): Observable<any> {
    return this.http.delete(this.URL_Promotion + id, this.httpOptions).pipe
    (catchError(this.httpErrorMsgsService.handleError));
  }


}
