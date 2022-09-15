import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
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
