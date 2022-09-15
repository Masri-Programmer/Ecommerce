import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  MyLogin:  LoginInfo= new  LoginInfo();
  constructor(private apiCaller : HttpClient) { }

  ngOnInit(): void {
  }
  sign(){
    
    console.log(this.MyLogin);
    this.apiCaller.post<any>('https://ecommerce100200.herokuapp.com/login',
   
 this.MyLogin   )
      .subscribe(data => {
      
    })

  }
}
class LoginInfo{
  
  user:String ='';
  password:String ='';
 
}