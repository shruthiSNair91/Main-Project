import { Component, OnInit } from '@angular/core';
import {LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-my-pass',
  templateUrl: './my-pass.component.html',
  styleUrls: ['./my-pass.component.css']
})
export class MyPassComponent implements OnInit {

  constructor(private logD:LoginComponent) { }

  ngOnInit(): void {
    console.log(this.logD.logUser);
    
  }

}
