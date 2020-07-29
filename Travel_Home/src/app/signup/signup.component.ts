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

  constructor(private pServ:PassConnectService) { }

  ngOnInit(): void {
  }

  AddsignupUser()
  {
    alert('functn called');
    console.log(this.userSignup);
    
  }
}
