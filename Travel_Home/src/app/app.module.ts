import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PassApplyComponent } from './pass-apply/pass-apply.component';
import { PassCancelComponent } from './pass-cancel/pass-cancel.component';
import { from } from 'rxjs';
import { ShowPassComponent } from './show-pass/show-pass.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MyPassComponent } from './my-pass/my-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassApplyComponent,
    PassCancelComponent,
    ShowPassComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    MyPassComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
