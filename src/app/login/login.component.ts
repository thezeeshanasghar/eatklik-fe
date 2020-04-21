import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/_model/login';
import { LoginService } from 'src/app/shared/services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  APP_NAME: string;
  // constructor(public router: Router) {}

  ngOnInit() {
      this.APP_NAME = environment.APP_NAME;
  }
  resourceURL: string;
  User: Login[];
  constructor(private loginService: LoginService, public router: Router, private modalService: NgbModal) {
      this.resourceURL = environment.RESOURCES_URL;
    }
    
  onLoggedin() {
    // localStorage.setItem('isLoggedin', 'true');
      console.log("**************************")
      var Email:any = ((document.getElementById("Email") as HTMLInputElement).value);
      var Password :any= ((document.getElementById("Password") as HTMLInputElement).value);

  this.loginService.UserLogin(Email,Password).subscribe(
    res => {
     console.log(res);
    if(res)
    {
      localStorage.setItem('isLoggedin', 'true');

      localStorage.setItem('User', JSON.stringify(res));
      this.router.navigate(['/dashboard']);

    }
    },
    err => {
      console.log("Login");
    }
  );

  }
}
