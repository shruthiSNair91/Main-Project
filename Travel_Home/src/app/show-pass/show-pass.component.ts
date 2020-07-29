import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PassConnectService } from '../pass-connect.service';
import { userData } from '../pass-apply/userData.model';

@Component({
  selector: 'app-show-pass',
  templateUrl: './show-pass.component.html',
  styleUrls: ['./show-pass.component.css']
})
export class ShowPassComponent implements OnInit {

showUser : userData [];
  id;

  constructor(private passService:PassConnectService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.router.snapshot.paramMap.get('id');
    this.passService.showPass(this.id)
    .subscribe(data=>{console.log(data)
              this.showUser=JSON.parse(JSON.stringify(data))});
              //console.log(this.id);
            }  
  
  
   cancelPassData()       
  {
    console.log(this.showUser);
    this.passService.cancelPass(this.id)
    .subscribe(data=>console.log(data))

  }

   }
         
