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
  private readonly API_Promotion = `${environment.BASE_URL}promotion`;

  constructor(protected http: HttpClient, private httpErrorMsgsService: HttpErrorMsgsService) {
    super(http);
  }

  getAllPromotions(): Observable<Promotion[]> {
    const url = `${this.API_Promotion}`;
    return this.http.get<Promotion[]>(url, this.httpOptions).pipe(catchError(this.httpErrorMsgsService.handleError)
    );
  }


}
