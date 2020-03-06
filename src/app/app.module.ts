import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpErrorMsgsService} from './shared/services/http-error-msgs.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
CommonModule,
    BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard, HttpErrorMsgsService, ToastrModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
