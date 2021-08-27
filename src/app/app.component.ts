import { iif } from 'rxjs';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { AxieMockService } from './shared/axie-mock.service';
import { AxieModel } from './shared/axie.model';
import { FilterModel } from './shared/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'axie-card-explorer';
  data: AxieModel[];
  filteredData: AxieModel[];
  filter: FilterModel = new FilterModel();

  classItems = ['Hepsi','Balık', 'Bitki', 'Kuş', 'Sürüngen', 'Yabani', 'Böcek'];
  costItems = ['Hepsi','0','1','2'];
  attackTypes = ['Hepsi','Uzaktan', 'Yakından'];
  partTypes = ['Hepsi', 'Kuyruk', 'Sırt', 'Boynuz', 'Ağız'];
  constructor(private axieService: AxieMockService, private cdr:ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.data = this.axieService.list();
    this.filteredData = this.data;
  }

  classChange(filter: string){
    if(filter === 'Hepsi'){
      filter = '';
    }
    this.filter.class = filter.toLocaleLowerCase();
    this.filterChange();
  }

  attackTypeChange(filter: string){
    if(filter === 'Hepsi'){
      filter = '';
    }
    this.filter.attack_type = filter.toLocaleLowerCase();
    this.filterChange();
  }

  partTypeChange(filter: string){
    if(filter === 'Hepsi'){
      filter = '';
    }
    this.filter.part_type = filter.toLocaleLowerCase();
    this.filterChange();
  }
  costChange(filter: string){
    if(filter === 'Hepsi'){
      filter = '';
    }
    this.filter.cost = filter;
    this.filterChange();
  }

  filterChange(){
    this.filteredData = this.data;
    if(this.filter.attack_type){
      this.filteredData = this.filteredData.filter((item: AxieModel) => item.attack_type === this.filter.attack_type);
    }
    if(this.filter.class){
      this.filteredData = this.filteredData.filter((item: AxieModel) => item.class === this.filter.class);
    }
    if(this.filter.cost){
      this.filteredData = this.filteredData.filter((item: AxieModel) => item.energy_cost === this.filter.cost);
    }
    // if(this.filter.part_type){
    //   this.filteredData = this.filteredData.filter((item: AxieModel) => item.part_type === this.filter.part_type);
    // }
  }

}
