import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  MyProducts:ProductInfo[]=[];
  MyJustArrived:JustArrivedInfo[]=[]
  searchText: string = ' '; 

  constructor(private apiCaller:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    this.getJustArrived();
  }

//   products = [
    
//     {title:'shirts', url:'assets/img/product-1.jpg' , number: 19 , id :0 },
//     {title:'shorts', url:'assets/img/product-2.jpg' , number: 15 , id :1 },
//     {title:'pants', url:'assets/img/product-3.jpg' , number: 12 , id :2 },
//     {title:'bags', url:'assets/img/product-4.jpg' , number: 23 , id :3 },
//     {title:'shoes', url:'assets/img/product-5.jpg' , number: 25 , id :4 },
//     {title:'watches', url:'assets/img/product-6.jpg' , number: 21 , id :5 },
//     {title:'phones', url:'assets/img/product-7.jpg' , number: 22 , id :7 }

// ];
  getJustArrived(){
    this.apiCaller.get('https://ecommerce100200.herokuapp.com/justarrived')
    .subscribe((data:any)=>{ 
      for (let i = 0; i < data.Justarrived.length; i++) {
        var fi = new JustArrivedInfo()
        fi.title=data.Justarrived[i]['A'];
        fi.url=data.Justarrived[i]['B'];
        fi.fprice=data.Justarrived[i]['C'];
        fi.nprice=data.Justarrived[i]['D'];
        this.MyJustArrived.push(fi);
        
      }
  console.log(data)
  })
  }

 
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    // console.log(this.searchText);
      }
  
  getProducts(){
    this.apiCaller.get('https://ecommerce100200.herokuapp.com/products')
    .subscribe((data:any)=>{
      for (let i = 0; i < data.Products.length; i++) {
        var si = new ProductInfo()
        si.title=data.Products[i]['A'];
        si.url=data.Products[i]['B'];
        si.number=data.Products[i]['C'];
        this.MyProducts.push(si);
        
      }
  console.log(data)
  })
  
  }
  
}

export class ProductInfo{
  title :string= ''
  url : string = ''
  number : number = 0
}

export class JustArrivedInfo{
  title :string= ''
  url : string = ''
  fprice : number = 0
  nprice : number = 0
}

