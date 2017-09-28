import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-item-table-list',
  templateUrl: './item-table-list.component.html'
})
export class ItemTableListComponent implements OnInit {
  private items: Item[];
  private filtre: Item = {
    id: null,
    title: '',
    description: ''
  };

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.findAll();
  }

  remove(item: Item): void {
    this.itemsService.remove(item.id);
  }

  updateFilter(filterField: any, key: string) {
    this.filtre[key] = filterField;
  }

  updateField(inputField: any, item: Item, key: string) {
    item[key] = inputField;
    this.itemsService.save(item);
  }
}


