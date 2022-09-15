import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
@Input() value:number = 1  ;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
this.value=this.value +1 ;
  }
  decrement(){
    this.value=this.value -1 ;
  }
}
