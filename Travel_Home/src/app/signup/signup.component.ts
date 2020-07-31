import { Component, OnInit } from '@angular/core';
import { PassConnectService } from '../pass-connect.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userSignup=<any>{}
  flag = true;
  constructor(private pServ:PassConnectService, private route:Router)
   {  }

  ngOnInit(): void {
  }
  
  AddsignupUser()
  {
    alert('signup function called');
    var regEx = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    console.log(this.userSignup.phone);
    
    if (regEx.test(this.userSignup.phone))
     {
       alert("true..");
          console.log(this.userSignup);
          if(this.userSignup.pwd==this.userSignup.cnfpwd)
          {
              this.pServ.signupUser(this.userSignup)
              this.route.navigate(['/login']);
          }
          else{
            alert('Password doesnot matches');
              }
      }
      else{
            this.flag=false;
      }
      
    }
  }
