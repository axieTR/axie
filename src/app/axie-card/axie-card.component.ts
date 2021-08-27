import { Component, Input, OnInit } from '@angular/core';

import { AxieModel } from '../shared/axie.model';

@Component({
  selector: 'axie-card',
  templateUrl: './axie-card.component.html',
  styleUrls: ['./axie-card.component.scss']
})
export class AxieCardComponent implements OnInit {
  @Input('axie') axie: AxieModel;
  constructor() { }

  ngOnInit(): void {
  }

}
