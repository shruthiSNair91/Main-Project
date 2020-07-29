import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassApplyComponent } from './pass-apply/pass-apply.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { PassCancelComponent } from './pass-cancel/pass-cancel.component';
import { ShowPassComponent } from './show-pass/show-pass.component';
  import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
      {path:'',component:PassApplyComponent},
      {path:'change',component:PassChangeComponent},
      {path:'cancel',component:PassCancelComponent},
      {path:'showpass/:id',component:ShowPassComponent},
      {path:'cancel',component:PassCancelComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
