import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchinshop',
  templateUrl: './searchinshop.component.html',
  styleUrls: ['./searchinshop.component.scss']
})
export class SearchinshopComponent implements OnInit {

  enteredSearchValue : string = '';
  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();
    constructor() { }
  
    ngOnInit(): void {
    }
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  }