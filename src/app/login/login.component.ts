import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  APP_NAME: string;
  constructor(public router: Router) {}

  ngOnInit() {
      this.APP_NAME = environment.APP_NAME;
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
}
