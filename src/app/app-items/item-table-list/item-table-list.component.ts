import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-item-table-list',
  templateUrl: './item-table-list.component.html'
})
export class ItemTableListComponent implements OnInit {
  private items: Item[];
  private titleFilterDisplay: boolean;
  private descriptionFilterDisplay: boolean;
  private filtre: Item = {
    id : null,
    title : '',
    description : ''
  };

  constructor(private itemsService: ItemsService) {
    this.items = itemsService.findAll();
  }

  ngOnInit() {
  }

  displayFilter($event: MouseEvent) {
    this.titleFilterDisplay = true;
    this.descriptionFilterDisplay = true;
  }
}
