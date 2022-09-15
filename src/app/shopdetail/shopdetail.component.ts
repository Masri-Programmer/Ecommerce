import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent implements OnInit {
@Input() value = 1 ;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.value=this.value +1 ;
  }
  decrement(){
    this.value=this.value -1;
  }
}
