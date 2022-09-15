import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() title='Mens dressing ';
  @Input() url='assets/img/cat-1.jpg';
  @Input() number= 15;
  constructor() { }

  ngOnInit(): void {
  }

}
