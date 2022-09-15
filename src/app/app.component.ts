import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  searchText:string = ''

  constructor(){

  }
  ngOnInit(): void {
    
  }

  onSearchTextEntered(searchValue: string){
    this.searchText= searchValue;
    console.log(this.searchText);
  }
}
