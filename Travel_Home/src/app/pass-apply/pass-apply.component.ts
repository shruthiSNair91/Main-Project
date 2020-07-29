import { Component, OnInit } from '@angular/core';
import { PassConnectService } from '../pass-connect.service';
import { userData } from "./userData.model";
  import { from } from 'rxjs';
import { Router ,RouterLink } from '@angular/router';

@Component({
  selector: 'app-pass-apply',
  templateUrl: './pass-apply.component.html',
  styleUrls: ['./pass-apply.component.css']
})
export class PassApplyComponent implements OnInit {

  currentDate = new Date();
  
  usrData= new userData (null,null,null,null,null,null);
  //userReceived : userData [];

  constructor(private passService:PassConnectService, private router:Router ) {  }

checkStatus=[];
passObj=<any>{}
submittedDate=<any>{}
id;
mydroplist;
val={};

 data:Array<Object> =[
          {name: "shopping"},
          {name: "medical"},
          {name: "repairement"},
          {name: "family reunion"}
       ];

  ngOnInit(): void {
     this.passService.get_passDate()
     .subscribe((data)=>{
      console.log(data);
      this.passObj=JSON.parse(JSON.stringify(data));
     })
  }
  
  selected()
  {

       this.val=this.mydroplist;
       console.log(this.usrData.trPurpose);
  }   
  passDateSubmit()
  {
     
      let checkcount = 0;
      for (let i=0; i<this.passObj.length; i++) 
      {
          if (this.checkStatus[i]) 
          {
              this.submittedDate[checkcount]=this.passObj[i].pass_date;
              checkcount++;
          }
      }
      this.usrData.date1=this.submittedDate[0];
      this.usrData.date2=this.submittedDate[1];
      if (checkcount == 2)
      {
            console.log("sending submission");
            //console.log(this.submittedDate);
            this.passService.submit_selected_dates(this.submittedDate, this.usrData )
            .subscribe(data=>{
                this.id=JSON.parse(JSON.stringify(data));
                //console.log( this.id);
                this.router.navigate(['/showpass',this.id]);
                  });
      }
      else
      {
            alert('Only 2 dates are allowed');
      }
      //console.log(this.id);
      
}


}
