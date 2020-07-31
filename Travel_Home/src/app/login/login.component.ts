import { Component, OnInit } from '@angular/core';
import { PassConnectService } from '../pass-connect.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginObj=<any>{}
  logUser=<any>{}
  constructor(private pServ : PassConnectService , private rou : Router){ }

  ngOnInit(): void {
  }

  loginData()
  {
      

      this.pServ.loginUser(this.loginObj)
      .subscribe((loguser)=>
      {
        this.logUser=JSON.parse(JSON.stringify(loguser));
        if(this.logUser)
        {
            console.log(loguser)
            this.rou.navigate(['/']);
        }
        else
        {
          alert('Invalid Phone no or Password');
        }
      
    });
   
       
  }


}
