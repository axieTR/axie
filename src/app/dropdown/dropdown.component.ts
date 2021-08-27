import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AxieModel } from '../shared/axie.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('items') items: string[];
  @Input('title') title: string;
  @Output('selectedItem') selectedItem = new EventEmitter<string>();

  selectedOption: string;
  constructor() { }

  onChange(){
    console.log(this.selectedOption)
    this.selectedItem.emit(this.selectedOption);
  }
  ngOnInit(): void {
  }

}
