import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  MyContact:  ContactInfo= new  ContactInfo();
  constructor(private apiCaller : HttpClient) { }

  ngOnInit(): void {
 
  }
 
  PostData(){
    
    console.log(this.MyContact);
    this.apiCaller.post<any>('https://ecommerce100200.herokuapp.com/ContactUs',
   
 this.MyContact   )
      .subscribe(data => {
      
    })
 alert('Message Sent...')
  }
}
class ContactInfo{
  
  name:String ='';
  email:String ='';
  subject:String='';
  message:String='';
}