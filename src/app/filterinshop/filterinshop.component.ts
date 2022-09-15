import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filterinshop',
  templateUrl: './filterinshop.component.html',
  styleUrls: ['./filterinshop.component.scss']
})
export class FilterinshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() Latest:number= 6;
  @Input() Popularity:number= 3; 
  @Input() BestRating: number=3;

  selectedValue:string = 'All';
  @Output()

  filterSelectionChanged : EventEmitter<string> = new EventEmitter<string>();
  onSelectionChanged (){

    this.filterSelectionChanged.emit(this.selectedValue);
    // console.log(this.selectedValue)
   }
}
