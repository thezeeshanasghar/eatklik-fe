import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    APP_NAME: string;
    constructor() {
      this.APP_NAME = environment.APP_NAME;
    }

    ngOnInit() {}
}
