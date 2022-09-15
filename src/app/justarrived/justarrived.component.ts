import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-justarrived',
  templateUrl: './justarrived.component.html',
  styleUrls: ['./justarrived.component.css']
})
export class JustarrivedComponent implements OnInit {
@Input() url: string = 'assets/img/product-1.jpg';
@Input() title : string = 'Cute shirts ';
@Input() fprice : number = 223;
@Input() nprice : number = 123;
  constructor() { }

  ngOnInit(): void {
  }

}
