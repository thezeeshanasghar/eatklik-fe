import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/_model/login';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule],
    declarations: [LoginComponent]
})
export class LoginModule {
    resourceURL: string;
    User: Login[];
    constructor(private loginService: LoginService, public router: Router, private modalService: NgbModal) {
        this.resourceURL = environment.RESOURCES_URL;
      }
    
}

