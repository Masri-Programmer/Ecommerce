import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  products= [
{
 id:0, type : 'Popularity', img: 'assets/img/product-2.jpg', name: 'ColorFul Stylish T-Shirts', price: 123, newPrice:69
},
{
  id:1, type : 'BestRating', img: 'assets/img/product-3.jpg', name: 'Green Stylish Pants', price: 312, newPrice:85
 },
 {
  id:2, type : 'Popularity', img: 'assets/img/product-4.jpg', name: 'Blue Stylish Shoes', price: 421, newPrice:96
 },
 {
  id:3, type : 'BestRating', img: 'assets/img/product-5.jpg', name: 'ColorFul Stylish SweatShirt', price: 114, newPrice:85
 },
 {
  id:4, type : 'Popularity', img: 'assets/img/product-6.jpg', name: 'Yellow Stylish Dress', price: 421, newPrice:82
 },
 {
  id:5,type : 'BestRating',  img: 'assets/img/product-7.jpg', name: 'Red Stylish Jacket', price: 421, newPrice:85
 },

  ]

  getLatest(){
    return this.products.length;
  }
  getPopularity(){
    return this.products.filter(products => products.type === 'Popularity').length;
  }
  getBestRating(){
    return this.products.filter(products => products.type === 'BestRating').length;
  }

  productsCountRadioButton: string = 'Latest'
  searchText: string = ' '; 

  onFilterRadioButtonChanged(data: string){
this.productsCountRadioButton= data;
console.log(this.productsCountRadioButton)
  }

  onSearchTextEntered(searchValue : string){
this.searchText = searchValue;
// console.log(this.searchText);
  }
}
