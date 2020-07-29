import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PassConnectService {

  constructor( private http : HttpClient) { }


get_passDate()
{
  return this.http.get('http://localhost:5200/pass')
  
}
submit_selected_dates(dates,usr)
{

  return this.http.post('http://localhost:5200/submitdates',{"dates":dates, "UserDetails":usr})
 
}

showPass(id)
{
  alert('showing pass');
  return this.http.post('http://localhost:5200/userpassdata',{'userid':id})
  
}

cancelPass(id)
{
  alert('cancel service works');
  return  this.http.post('http://localhost:5200/cancelpass',{'Uid':id})
  
}

}