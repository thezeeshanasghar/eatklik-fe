import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/_model/login';
import { LoginService } from 'src/app/shared/services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
// import {NgForm} from 'ng'
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
  constructor(private loginService: LoginService, public router: Router, private modalService: NgbModal,private toastr:ToastrService) {
      this.resourceURL = environment.RESOURCES_URL;
    }
    Password:any;
    Email:any;

  onLoggedin() {
    // localStorage.setItem('isLoggedin', 'true');
      console.log("**************************")
      var Email:any = ((document.getElementById("Email") as HTMLInputElement).value);
      var Password :any= ((document.getElementById("Password") as HTMLInputElement).value);
      var x=0;
      if(Email =="")
      {
          x+=1;
          (document.getElementById("emailError") as HTMLInputElement).style.display="block";

      } else{
        (document.getElementById("emailError") as HTMLInputElement).style.display="none";

      }
      if(Password =="")
      {
          x+=1;
          (document.getElementById("passwordError") as HTMLInputElement).style.display="block";

      } else{
        (document.getElementById("passwordError") as HTMLInputElement).style.display="none";

      }
      if(x!=0)
      {
        return false;
      }
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
      this.toastr.error("Invalid Email or Password",'Login Failed.', {
        positionClass: 'toast-bottom-right' })
      console.log("Login");
    }
  );

  }
}
